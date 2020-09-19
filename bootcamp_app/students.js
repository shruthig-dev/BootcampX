const { Pool } = require('pg');
const args = process.argv;
const cohort_name = args[2];
const limit = args[3] | 5; 

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(
    {
      text: `
      SELECT students.id, students.name AS student, cohorts.name AS cohort_name
      FROM students JOIN cohorts ON cohorts.id = cohort_id
      WHERE cohorts.name LIKE $1
      LIMIT $2;
      `,
      values: [`%${cohort_name}%`, limit ]
    })
.then(res => {
  console.log(res);
})
.catch(err => console.error('query error', err.stack));