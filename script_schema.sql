CREATE SCHEMA `trouveTonArtisan` ;

CREATE TABLE `trouveTonArtisan`.`Categorie` (
  `id_categorie` INT NOT NULL AUTO_INCREMENT,
  `nom_categorie` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_categorie`));

CREATE TABLE `trouveTonArtisan`.`Specialite` (
  `id_specialite` INT NOT NULL AUTO_INCREMENT,
  `nom_specialite` VARCHAR(255) NOT NULL,
  `id_categorie` INT NULL,
  PRIMARY KEY (`id_specialite`),
  INDEX `fk_id_categorie_idx` (`id_categorie` ASC) VISIBLE,
  CONSTRAINT `fk_id_categorie`
    FOREIGN KEY (`id_categorie`)
    REFERENCES `trouveTonArtisan`.`Categorie` (`id_categorie`)
    ON DELETE CASCADE
    ON UPDATE SET NULL);

CREATE TABLE `trouveTonArtisan`.`Artisan` (
  `id_artisan` INT NOT NULL AUTO_INCREMENT,
  `nom_artisan` VARCHAR(255) NOT NULL,
  `id_specialite` INT NOT NULL,
  `note_artisan` DECIMAL(2,1) NOT NULL,
  `ville_artisan` VARCHAR(255) NOT NULL,
  `about_artisan` LONGTEXT NOT NULL,
  `email_artisan` VARCHAR(255) NOT NULL,
  `site_artisan` VARCHAR(255) NULL,
  `top_artisan` TINYINT NOT NULL,
  PRIMARY KEY (`id_artisan`),
  INDEX `fk_id_specialite_idx` (`id_specialite` ASC) VISIBLE,
  CONSTRAINT `fk_id_specialite`
    FOREIGN KEY (`id_specialite`)
    REFERENCES `trouveTonArtisan`.`Specialite` (`id_specialite`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `trouveTonArtisan`.`Contact` (
  `id_contact` INT NOT NULL AUTO_INCREMENT,
  `id_artisan` INT NOT NULL,
  `nom_client` VARCHAR(255) NOT NULL,
  `email_client` VARCHAR(255) NOT NULL,
  `sujet` TEXT(25) NOT NULL,
  `message` LONGTEXT NOT NULL,
  PRIMARY KEY (`id_contact`),
  INDEX `fk_id_artisan_idx` (`id_artisan` ASC) VISIBLE,
  CONSTRAINT `fk_id_artisan`
    FOREIGN KEY (`id_artisan`)
    REFERENCES `trouveTonArtisan`.`Artisan` (`id_artisan`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
    CREATE TABLE `trouveTonArtisan`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

    
    
