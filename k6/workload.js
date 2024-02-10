import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 270000,
  iterations: 10000000
};
export default function () {
  http.get('http://51.15.25.108');
  sleep(0.01);
}
