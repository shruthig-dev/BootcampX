select id,name
from students
where
cohort_id = 1
order by name;

select count(id) from students
where cohort_id IN(1,2,3);

SELECT name, id, cohort_id FROM students WHERE email IS NULL OR phone IS NULL;

select id,name,cohort_id from students where end_date is null order by cohort_id;

SELECT name, id, cohort_id FROM students WHERE end_date IS NULL ORDER BY cohort_id;

SELECT name, email, phone FROM students WHERE github IS NULL AND end_date IS NOT NULL;