let env: {
  [key: string]: string;
} = {};
if (process.env.NODE_ENV === 'development') {
  env = require('./.env.development').default;
} else if (process.env.NODE_ENV === 'production') {
  env = require('./.env.production').default;
}

export default env;