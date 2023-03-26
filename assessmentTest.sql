-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for assessment_data
CREATE DATABASE IF NOT EXISTS `assessment_data` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `assessment_data`;

-- Dumping structure for table assessment_data.article
DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `body` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table assessment_data.article: 9 rows
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` (`id`, `title`, `body`) VALUES
	(6, 'When margret met Jess (Extended cut)', 'sapien euismod, molestie augue. Vivamus sapien felis, ullamcorper sed pulvinar sit amet, ullamcorper at nisl. Ut consequat, neque id facilisis bibendum, neque nisi elementum est, vel posuere felis sapien et sem. Vivamus et mauris nibh. Suspendisse venenatis ultricies erat, eget ullamcorper nunc pretium at. Fusce consectetur ultricies convallis. Aliquam nec dui a lectus sodales condimentum ut at erat. Aliquam tempor quam id neque porttitor, et convallis ex dictum.'),
	(7, 'A story to tell', 'sapien euismod, molestie augue. Vivamus sapien felis, ullamcorper sed pulvinar sit amet, ullamcorper at nisl. Ut consequat, neque id facilisis bibendum, neque nisi elementum est, vel posuere felis sapien et sem. Vivamus et mauris nibh. Suspendisse venenatis ultricies erat, eget ullamcorper nunc pretium at. Fusce consectetur ultricies convallis. Aliquam nec dui a lectus sodales condimentum ut at erat. Aliquam tempor quam id neque porttitor, et convallis ex dictum.'),
	(33, 'The Photoresistor', 'The photoresistor contains electrons which are bonded to atoms in the valence band. If light falls on the photoresistor the electrons in the valence band, called valence electrons, absorb energy from the light and break the bond with the electrons. The electrons which break the bond are called free electrons and will jump into the conduction band. In the conduction band the electrons, not bonded to any atom are able to freely move from one place to another.\nOn the other side the atoms which previously had more electrons are now called holes. Therefore free electrons and holes are created as pairs and are carry electric current. These electric current decreases the resistance from the photoresistor.\nWhen the energy from the light increases, more free electrons and holes are created and therefore the resistance decreases further. In summary: The resistance of the LDR decreases with increasing incident light.\n\nTo measure the incident light a voltage divider with a 4.7kΩ resistor is used.\nWith the analog to digital converter (ADC) the Arduino converts the reference voltage of the voltage divider to a digital value. In the following example we want to read the incident light from a light sensor and print the analog and digital values.'),
	(27, 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus blandit felis, a scelerisque turpis. Nunc congue lorem nec felis suscipit convallis. Pellentesque ultricies, nisl nec convallis iaculis, urna est volutpat urna, eget auctor purus velit vel risus. Etiam convallis, sem a rhoncus efficitur, ligula nibh pharetra urna, eu lobortis magna nunc in leo. Vivamus vehicula libero lorem, id tincidunt est consequat ultricies. Vivamus dictum mi lacinia sodales pulvinar. Fusce vel urna quam. Vestibulum gravida ipsum nulla, id sollicitudin purus lobortis sit amet. Vivamus magna arcu, fermentum ut ullamcorper at, feugiat non nisi. Donec et ligula bibendum arcu dapibus placerat nec vitae velit. Sed aliquet volutpat lorem quis euismod. Vivamus magna tortor, auctor vel nulla non, viverra commodo justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sapien augue, mattis quis vulputate vel, vestibulum a arcu. Phasellus ut dui lectus. Sed consequat ac nibh sed porttitor.\n\nVestibulum pellentesque suscipit nunc, sed auctor sem lobortis ac. Nam at dapibus odio. In quis consectetur nisl, vel porta magna. Etiam sodales ac elit ut molestie. Morbi iaculis metus vel tortor ultricies suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc non metus sapien.\n\nQuisque pretium convallis tellus, id tristique nisi lacinia quis. Donec enim magna, convallis sed enim sed, sollicitudin semper tellus. In rhoncus aliquet arcu. Etiam et euismod sem. Aliquam dictum consequat elementum. Cras maximus in purus sit amet dictum. Integer porta, neque sed sagittis gravida, sapien elit dignissim odio, aliquam rutrum ante nisl sed augue. Aenean interdum dui id velit condimentum venenatis. Nullam finibus nisl vel efficitur euismod.\n\nMorbi laoreet quis ante eget iaculis. Aenean finibus pellentesque sapien, eu varius nibh semper a. Donec mollis nisl libero, ut luctus erat suscipit et. Donec leo tortor, tempor ut tempus sed, fringilla sed urna. Vivamus semper hendrerit rhoncus. Donec risus neque, posuere eu pulvinar a, facilisis ut metus. Suspendisse potenti. Integer non ante posuere, aliquet libero vitae, imperdiet elit. Fusce efficitur erat ipsum, vitae dapibus leo condimentum sit amet. Donec pharetra fermentum accumsan. Donec non luctus eros.'),
	(19, 'Another Article', 'The body of another article.'),
	(15, 'title', 'body'),
	(17, 'An article that has been edited', 'Here is an article that has been edited again'),
	(9, 'Delete Me', 'Delete me Tooooooo'),
	(10, 'Delete Me', 'Delete me!!!!\nQuisque pretium convallis tellus, id tristique nisi lacinia quis. Donec enim magna, convallis sed enim sed, sollicitudin semper tellus. In rhoncus aliquet arcu. Etiam et euismod sem. Aliquam dictum consequat elementum. Cras maximus in purus sit amet dictum. Integer porta, neque sed sagittis gravida, sapien elit dignissim odio, aliquam rutrum ante nisl sed augue. Aenean interdum dui id velit condimentum venenatis. Nullam finibus nisl vel efficitur euismod.');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
