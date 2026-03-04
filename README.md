# clinical-trials-api

Lightweight JavaScript client for the [ClinicalTrials.gov API v2](https://clinicaltrials.gov/data-api/api).

## Install

```bash
npm install clinical-trials-api
```

## Usage

```javascript
const { fetchTrials, getStudy, searchTrials } = require('clinical-trials-api');

// Find recruiting breast cancer trials
const results = await fetchTrials({ condition: 'breast cancer' });
console.log(results.studies.length, 'trials found');

// Find trials in a specific city
const local = await fetchTrials({ condition: 'diabetes', location: 'New York' });

// Get a specific study by NCT ID
const study = await getStudy('NCT05382442');

// Free-text search
const search = await searchTrials('immunotherapy lung cancer');
```

## API

### `fetchTrials(options)`
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| condition | string | - | Medical condition |
| location | string | - | City, state, or country |
| status | string | 'RECRUITING' | Trial status filter |
| pageSize | number | 20 | Results per page (max 100) |
| pageToken | string | - | Pagination token |

### `getStudy(nctId)`
Fetch a single study by NCT ID.

### `searchTrials(query, options)`
Free-text search across all trial fields.

## See Also

- [HelloStudys](https://hellostudys.com) — Free AI-powered clinical trial matching for patients
- [ClinicalTrials.gov](https://clinicaltrials.gov/) — Official US clinical trials registry
- [Awesome Clinical Trials](https://github.com/neverpeakev/awesome-clinical-trials) — Curated list of clinical trial resources

## License

MIT
