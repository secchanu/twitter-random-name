import { CronJob } from "cron";

import { named } from "./named";
import { ranking } from "./ranking";

const namedJob = new CronJob("0 0 22 * * *", named);
const rankingJob = new CronJob("0 0 23 31 11 *", ranking);

namedJob.start();
rankingJob.start();
