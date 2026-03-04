/**
 * clinical-trials-api - ClinicalTrials.gov API v2 client
 * https://hellostudys.com
 */

const API_BASE = 'https://clinicaltrials.gov/api/v2/studies';

async function fetchTrials({ condition, location, status = 'RECRUITING', pageSize = 20, pageToken } = {}) {
  const params = new URLSearchParams();
  if (condition) params.set('query.cond', condition);
  if (location) params.set('query.locn', location);
  if (status) params.set('filter.overallStatus', status);
  params.set('pageSize', String(Math.min(pageSize, 100)));
  if (pageToken) params.set('pageToken', pageToken);

  const res = await fetch(`${API_BASE}?${params}`);
  if (!res.ok) throw new Error(`ClinicalTrials.gov API error: ${res.status}`);
  return res.json();
}

async function getStudy(nctId) {
  const res = await fetch(`${API_BASE}/${nctId}`);
  if (!res.ok) throw new Error(`Study ${nctId} not found: ${res.status}`);
  return res.json();
}

async function searchTrials(query, { pageSize = 20, status = 'RECRUITING' } = {}) {
  const params = new URLSearchParams({
    'query.term': query,
    'filter.overallStatus': status,
    'pageSize': String(Math.min(pageSize, 100)),
  });
  const res = await fetch(`${API_BASE}?${params}`);
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  return res.json();
}

module.exports = { fetchTrials, getStudy, searchTrials };
