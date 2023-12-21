import {
  Users,
} from '../models';

const models = {
  Users,
};

async function main() {
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const i in models) {
    // eslint-disable-next-line no-console
    console.log(i);
    // eslint-disable-next-line no-await-in-loop
    await models[i].sync({ alter: true });
  }

  // eslint-disable-next-line no-undef
  process.exit(0);
}

// eslint-disable-next-line no-console
main().catch(console.error);
