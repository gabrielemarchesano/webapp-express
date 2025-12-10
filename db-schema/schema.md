# Movies
- id BIGINT NN AUTO_INCREMENT
- title VARCHAR(255) NN
- director VARCHAR(255) NN
- genre VARCHAR(255) NULL
- release_year YEAR NULL
- abstract TEXT NULL
- image VARCHAR(255) NULL
- created_at 
- updated_at 


# Reviews
- id BIGINT NN AUTO_INCREMENT
- movie_id BIGINT NN
- name VARCHAR(255) NN
- vote TINYINT NN
- text TEXT
- created_at NN DEFAULT
- updated_at NN DEFAULT