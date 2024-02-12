import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 100,
  iterations: 1000000000
};
export default function () {
  http.get('https://seized.ws/nosec');
  sleep(0.0000000000001);
}
