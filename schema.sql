DROP TABLE IF EXISTS countries;

CREATE TABLE countries (
  country TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  name TEXT
);

COPY countries(country, latitude, longitude, name)
FROM '/Users/danielleebron/Downloads/countries.csv'
DELIMITER ','
CSV HEADER;
