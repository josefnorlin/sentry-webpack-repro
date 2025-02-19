import * as Sentry from '@sentry/browser';
import { sayHello } from './other';

Sentry.init({
  dsn: "https://d0cda96cb0deccf7276f5e9244fdf0d7@o1168389.ingest.us.sentry.io/4508846186233856",
  integrations: [],
});

console.log('Hello world!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello from index!');
    sayHello();
});
