import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10000,
  iterations: 100000000
};
export default function () {
  http.get('https://seized.ws/nosec');
  sleep(0.01);
}
