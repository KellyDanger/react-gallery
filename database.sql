CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(180) NOT NULL,
	description VARCHAR(120) NOT NULL,
	likes INTEGER
);

-- POPULATE TABLE

INSERT INTO "gallery" ("path", "description", "likes") VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park', '0');
INSERT INTO "gallery" ("path", "description", "likes") VALUES ('images/AylaDragon.jpeg', 'Photo of a child in a dragon costume', '0');
INSERT INTO "gallery" ("path", "description", "likes") VALUES ('images/cat_lick.jpeg', 'Photo of a cat tucked in a sweather licking itself', '0');
INSERT INTO "gallery" ("path", "description", "likes") VALUES ('images/fall_trees.jpeg', 'Photo of autumnal trees', '0');
INSERT INTO "gallery" ("path", "description", "likes") VALUES ('images/K_climb.jpeg', 'Photo of a woman climbing a bouldering wall', '0');
INSERT INTO "gallery" ("path", "description", "likes") VALUES ('images/morning_glory.jpeg', 'Photo of a deep purple morning glory flower', '0');
INSERT INTO "gallery" ("path", "description", "likes") VALUES ('images/Rue_climb.jpeg', 'Photo of a child climbing a bouldering wall', '0')