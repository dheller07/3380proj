-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `audiobook`
--

DROP TABLE IF EXISTS `audiobook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audiobook` (
  `id` int NOT NULL,
  `isbn` varchar(16) DEFAULT NULL,
  `title` varchar(128) NOT NULL,
  `author_id` int NOT NULL,
  `narrator_id` int NOT NULL,
  `publisher` int NOT NULL,
  `publication_year` int DEFAULT NULL,
  `edition` int DEFAULT NULL,
  `series` int DEFAULT NULL,
  `series_position` int DEFAULT NULL,
  `genre` varchar(32) DEFAULT NULL,
  `checked_out` tinyint(1) NOT NULL,
  `waitlist_capacity` int NOT NULL,
  `location` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `author_id` (`author_id`),
  KEY `narrator_id` (`narrator_id`),
  KEY `publisher` (`publisher`),
  KEY `series` (`series`),
  KEY `location` (`location`),
  CONSTRAINT `audiobook_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `audiobook_ibfk_2` FOREIGN KEY (`narrator_id`) REFERENCES `narrator` (`id`),
  CONSTRAINT `audiobook_ibfk_3` FOREIGN KEY (`publisher`) REFERENCES `publisher` (`id`),
  CONSTRAINT `audiobook_ibfk_4` FOREIGN KEY (`series`) REFERENCES `series` (`id`),
  CONSTRAINT `audiobook_ibfk_5` FOREIGN KEY (`location`) REFERENCES `location` (`id`),
  CONSTRAINT `audiobook_ibfk_6` FOREIGN KEY (`id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audiobook`
--

LOCK TABLES `audiobook` WRITE;
/*!40000 ALTER TABLE `audiobook` DISABLE KEYS */;
INSERT INTO `audiobook` VALUES (12,'9780788722677','Junie B. Jones and the Stupoid, Smelly Bus',4,1,3,2002,NULL,3,1,'Children\'s Fiction',0,10,2),(13,'9780788726170','Junie B. Jones and a Little Monkey Business',4,1,3,2002,NULL,3,2,'Children\'s Fiction',0,10,2),(14,'9780807220191','Junie B. Jones and Her Big Fat Mouth',4,1,3,2002,NULL,3,3,'Children\'s Fiction',0,10,2),(15,'9780788732034','Junie B. Jones and Some Sneaky Peeky Spying',4,1,3,2002,NULL,3,4,'Children\'s Fiction',0,10,2);
/*!40000 ALTER TABLE `audiobook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `f_name` varchar(32) DEFAULT NULL,
  `l_name` varchar(32) NOT NULL,
  `origin` varchar(128) DEFAULT NULL,
  `author_born` int DEFAULT NULL,
  `author_died` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Stephanie','Meyer','USA',1973,NULL),(2,'James S. A.','Corey','USA',NULL,NULL),(3,'Sara','Gruen','Canada',NULL,NULL),(4,'Barbara','Park','USA',1947,2013);
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int NOT NULL,
  `isbn` varchar(16) DEFAULT NULL,
  `title` varchar(128) NOT NULL,
  `author_id` int NOT NULL,
  `publisher` int DEFAULT NULL,
  `publication_year` int DEFAULT NULL,
  `edition` int DEFAULT NULL,
  `series` int DEFAULT NULL,
  `series_position` int DEFAULT NULL,
  `genre` varchar(32) NOT NULL,
  `checked_out` tinyint(1) NOT NULL,
  `ebook` tinyint(1) NOT NULL,
  `waitlist_capacity` int NOT NULL,
  `location` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `location` (`location`),
  KEY `series` (`series`),
  KEY `publisher` (`publisher`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`location`) REFERENCES `location` (`id`),
  CONSTRAINT `book_ibfk_2` FOREIGN KEY (`series`) REFERENCES `series` (`id`),
  CONSTRAINT `book_ibfk_3` FOREIGN KEY (`publisher`) REFERENCES `publisher` (`id`),
  CONSTRAINT `book_ibfk_4` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `book_ibfk_5` FOREIGN KEY (`id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'9780316129084','Leviathan Wakes',2,1,2011,NULL,2,1,'Science Fiction',1,0,10,1),(2,'9780316038379','Twilight',1,1,2006,NULL,1,1,'YA Fiction',1,0,10,2),(3,'9780316007696','New Moon',1,1,2008,NULL,1,2,'YA Fiction',0,1,10,2),(4,'9780316027656','Eclipse',1,1,2009,NULL,1,3,'YA Fiction',0,0,10,2),(5,'9780316032834','Breaking Dawn',1,1,2009,NULL,1,4,'YA Fiction',1,1,10,2),(6,'9780316129060','Caliban\'s War',2,1,2012,NULL,2,2,'Science Fiction',0,0,10,1),(7,'9781841499925','Abbadon\'s Gate',2,1,2013,NULL,2,3,'Science Fiction',0,0,10,1),(8,'9780316217620','Cibola Burn',2,1,2014,NULL,2,4,'Science Fiction',0,0,10,1),(9,'9780316217590','Nemesis Games',2,1,2015,NULL,2,5,'Science Fiction',0,1,10,1),(10,'9780316332873','Tiamat\'s Wrath',2,1,2019,NULL,2,6,'Science Fiction',0,0,10,1),(11,'9780002007771','Water for Elephants',3,2,2006,1,NULL,NULL,'Fiction',0,0,10,2);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkoutItem`
--

DROP TABLE IF EXISTS `checkoutItem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkoutItem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item` int NOT NULL,
  `checkout_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `due_date` datetime NOT NULL,
  `return_date` datetime DEFAULT NULL,
  `returned` tinyint(1) DEFAULT NULL,
  `borrower_id` int NOT NULL,
  `employee_id` int NOT NULL,
  `customer_role` varchar(32) DEFAULT NULL,
  `overdue` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `item` (`item`),
  KEY `borrower_id` (`borrower_id`),
  KEY `employee_id` (`employee_id`),
  KEY `customer_role` (`customer_role`),
  CONSTRAINT `checkoutItem_ibfk_1` FOREIGN KEY (`item`) REFERENCES `item` (`id`),
  CONSTRAINT `checkoutItem_ibfk_2` FOREIGN KEY (`borrower_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `checkoutItem_ibfk_3` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  CONSTRAINT `checkoutItem_ibfk_4` FOREIGN KEY (`customer_role`) REFERENCES `customer` (`customer_role`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkoutItem`
--

LOCK TABLES `checkoutItem` WRITE;
/*!40000 ALTER TABLE `checkoutItem` DISABLE KEYS */;
INSERT INTO `checkoutItem` VALUES (1,1,'2021-04-19 00:00:00','2021-04-26 00:00:00',NULL,0,2202,1010,'Student',0),(2,2,'2021-04-17 00:00:00','2021-04-24 00:00:00',NULL,0,2202,1010,'Student',1),(3,5,'2021-04-01 00:00:00','2021-04-08 00:00:00','2021-04-18 00:00:00',1,2201,1010,'Student',1);
/*!40000 ALTER TABLE `checkoutItem` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `updateBookStatus` AFTER INSERT ON `checkoutItem` FOR EACH ROW UPDATE book
    SET checked_out = true WHERE id = new.item */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `updateAudiobookStatus` AFTER INSERT ON `checkoutItem` FOR EACH ROW UPDATE audiobook
    SET checked_out = true WHERE id = new.item */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `updateDeviceStatus` AFTER INSERT ON `checkoutItem` FOR EACH ROW UPDATE device
    SET checked_out = true WHERE id = new.item */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `updateDVDStatus` AFTER INSERT ON `checkoutItem` FOR EACH ROW UPDATE dvd
    SET checked_out = true WHERE id = new.item */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `updateMagazineStatus` AFTER INSERT ON `checkoutItem` FOR EACH ROW UPDATE magazine
    SET checked_out = true WHERE id = new.item */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `overdue_item` AFTER UPDATE ON `checkoutItem` FOR EACH ROW BEGIN
IF OLD.overdue <> new.overdue THEN
INSERT INTO lateFine (checkout_item, borrower, days_late, fine_amount, paid) VALUES (OLD.item, OLD.borrower_id, 1, (SELECT fine_rate FROM customer WHERE id = OLD.borrower_id), false); END IF; END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `f_name` varchar(32) DEFAULT NULL,
  `l_name` varchar(32) DEFAULT NULL,
  `customer_role` varchar(32) DEFAULT NULL,
  `item_limit` int DEFAULT NULL,
  `acct_balance` float DEFAULT NULL,
  `fine_rate` float DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `customer_role` (`customer_role`)
) ENGINE=InnoDB AUTO_INCREMENT=2206 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (2201,'Jane','Doe','Faculty',10,0,0.15,'teacherZr0ck',1),(2202,'Paris','Hilton','Student',5,0,0.3,'thatsH0T',1),(2203,'Charlie','Brown','Student',5,0,0.3,'iLikeb00ks',1),(2204,'Bill','Nye','Faculty',5,0,0.3,'myPa55word',1),(2205,'Wednesday','Adams','Student',5,0,0.3,'r34ding',1);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device` (
  `id` int NOT NULL,
  `device_type` varchar(32) DEFAULT NULL,
  `model` varchar(32) DEFAULT NULL,
  `checked_out` tinyint(1) DEFAULT NULL,
  `waitlist_capacity` int DEFAULT NULL,
  `location` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `location` (`location`),
  CONSTRAINT `device_ibfk_1` FOREIGN KEY (`id`) REFERENCES `item` (`id`),
  CONSTRAINT `device_ibfk_2` FOREIGN KEY (`location`) REFERENCES `location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES (26,'Tablet','SM-T290NZKAXAR',0,3,1),(27,'Tablet','MYL92LL/A',0,3,1),(28,'Laptop','XE350XBA-K01US',0,2,1),(29,'Laptop','XE350XBA-K01US',0,2,1),(30,'Laptop','XE350XBA-K01US',0,2,1),(31,'Tablet','SM-T500NZAAXAR',0,3,1),(32,'Tablet','SM-T500NZAAXAR',0,3,1);
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dvd`
--

DROP TABLE IF EXISTS `dvd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dvd` (
  `id` int NOT NULL,
  `title` varchar(128) NOT NULL,
  `release_date` date DEFAULT NULL,
  `director` varchar(64) DEFAULT NULL,
  `studio` varchar(32) DEFAULT NULL,
  `location` int NOT NULL,
  `checked_out` tinyint(1) NOT NULL,
  `waitlist_capacity` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `location` (`location`),
  CONSTRAINT `dvd_ibfk_1` FOREIGN KEY (`location`) REFERENCES `location` (`id`),
  CONSTRAINT `dvd_ibfk_2` FOREIGN KEY (`id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dvd`
--

LOCK TABLES `dvd` WRITE;
/*!40000 ALTER TABLE `dvd` DISABLE KEYS */;
INSERT INTO `dvd` VALUES (16,'Blue\'s Clues: Classic Clues','2004-01-27','Bruce Caines','Nickelodeon',2,0,5),(17,'Finding Nemo','2013-05-07','Andrew Stanton','Walt Disney Video',2,0,5),(18,'Troy','2009-11-03','Wolfgang Peterson','Warner Brothers',1,0,5),(19,'Pride and Prejudice','2006-02-28','Joe Wright','Universal Pictures',1,0,5);
/*!40000 ALTER TABLE `dvd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `f_name` varchar(32) DEFAULT NULL,
  `l_name` varchar(32) DEFAULT NULL,
  `ssn` int DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `salary` float DEFAULT NULL,
  `job_title` varchar(32) DEFAULT NULL,
  `phone_no` varchar(32) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `employee_pk` (`ssn`)
) ENGINE=InnoDB AUTO_INCREMENT=1012 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1010,'Caitlin','Dooley',123456789,'1994-10-01',100000,'Librarian','(832) 898-8867','mypa55word',1),(1011,'John','Smith',123456780,'1998-07-22',30000,'Librarian','(512) 893-5561','b00ks4Lyfe',1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `new_employee_notifications` AFTER INSERT ON `employee` FOR EACH ROW INSERT INTO reminders
    SET employee_id = new.id, message = 'There is a new employee added to the system', date_occured = NOW() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itemRequest`
--

DROP TABLE IF EXISTS `itemRequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itemRequest` (
  `req_number` int NOT NULL,
  `item_id` int NOT NULL,
  `req_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `requester_id` int NOT NULL,
  PRIMARY KEY (`req_number`),
  UNIQUE KEY `req_number` (`req_number`),
  KEY `item_id` (`item_id`),
  KEY `requester_id` (`requester_id`),
  CONSTRAINT `itemRequest_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`),
  CONSTRAINT `itemRequest_ibfk_2` FOREIGN KEY (`requester_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemRequest`
--

LOCK TABLES `itemRequest` WRITE;
/*!40000 ALTER TABLE `itemRequest` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemRequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lateFine`
--

DROP TABLE IF EXISTS `lateFine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lateFine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `checkout_item` int NOT NULL,
  `borrower` int NOT NULL,
  `fine_amount` float DEFAULT NULL,
  `paid` tinyint(1) DEFAULT NULL,
  `paid_date` datetime DEFAULT NULL,
  `days_late` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `checkout_item` (`checkout_item`),
  KEY `borrower` (`borrower`),
  CONSTRAINT `lateFine_ibfk_1` FOREIGN KEY (`checkout_item`) REFERENCES `checkoutItem` (`id`),
  CONSTRAINT `lateFine_ibfk_2` FOREIGN KEY (`borrower`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lateFine`
--

LOCK TABLES `lateFine` WRITE;
/*!40000 ALTER TABLE `lateFine` DISABLE KEYS */;
INSERT INTO `lateFine` VALUES (2,3,2201,2,1,'2021-04-25 20:22:04',10),(3,2,2202,0.3,0,NULL,1);
/*!40000 ALTER TABLE `lateFine` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `latefine_notifications` AFTER UPDATE ON `lateFine` FOR EACH ROW INSERT INTO reminders
    SET customer_id = new.id, message = 'There is a latefine charged on your account', date_occured = NOW() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(128) NOT NULL,
  `address` varchar(128) DEFAULT NULL,
  `phone_no` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'University of Houston','4333 University Dr, Houston, TX 77204','(713) 743-1050'),(2,'West University Place','6108 Auden St, Houston, TX 77005','(832) 927-5490');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `magazine`
--

DROP TABLE IF EXISTS `magazine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `magazine` (
  `id` int NOT NULL,
  `title` varchar(32) NOT NULL,
  `issue` varchar(32) DEFAULT NULL,
  `issue_date` date DEFAULT NULL,
  `topic` varchar(32) DEFAULT NULL,
  `location` int NOT NULL,
  `checked_out` tinyint(1) NOT NULL,
  `waitlist_capacity` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `location` (`location`),
  CONSTRAINT `magazine_ibfk_1` FOREIGN KEY (`location`) REFERENCES `location` (`id`),
  CONSTRAINT `magazine_ibfk_2` FOREIGN KEY (`id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `magazine`
--

LOCK TABLES `magazine` WRITE;
/*!40000 ALTER TABLE `magazine` DISABLE KEYS */;
INSERT INTO `magazine` VALUES (21,'Forbes','The Money Issue','2021-02-28','Finance',1,0,15),(22,'Forbes','Special Issue','2020-12-01','Finance',1,0,15),(23,'National Geographic','March 2021','2021-03-01','Geography',1,0,15),(24,'Scholastic News','May/June 2021','2021-04-01','Children\'s Education',2,0,15),(25,'Scholastic News','April 2021','2021-03-01','Children\'s Education',2,0,15);
/*!40000 ALTER TABLE `magazine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `narrator`
--

DROP TABLE IF EXISTS `narrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `narrator` (
  `id` int NOT NULL AUTO_INCREMENT,
  `f_name` varchar(32) DEFAULT NULL,
  `l_name` varchar(32) NOT NULL,
  `origin` varchar(128) DEFAULT NULL,
  `narrator_born` int DEFAULT NULL,
  `narrator_died` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `narrator`
--

LOCK TABLES `narrator` WRITE;
/*!40000 ALTER TABLE `narrator` DISABLE KEYS */;
INSERT INTO `narrator` VALUES (1,'Lana','Quintal',NULL,NULL,NULL);
/*!40000 ALTER TABLE `narrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publisher`
--

DROP TABLE IF EXISTS `publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `publisher_name` varchar(32) NOT NULL,
  `headquarters` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publisher`
--

LOCK TABLES `publisher` WRITE;
/*!40000 ALTER TABLE `publisher` DISABLE KEYS */;
INSERT INTO `publisher` VALUES (1,'Hachette Book Group','New York City, NY, USA'),(2,'Algonquin Books of Chapel Hill','Chapel Hill, NC, USA'),(3,'Random House','New York City, NY, USA');
/*!40000 ALTER TABLE `publisher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminders`
--

DROP TABLE IF EXISTS `reminders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  `message` varchar(256) DEFAULT NULL,
  `date_occured` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `reminders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `reminders_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminders`
--

LOCK TABLES `reminders` WRITE;
/*!40000 ALTER TABLE `reminders` DISABLE KEYS */;
/*!40000 ALTER TABLE `reminders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `id` int NOT NULL AUTO_INCREMENT,
  `series_name` varchar(128) NOT NULL,
  `total_series` int DEFAULT NULL,
  `series_number` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,'The Twilight Saga',4,NULL),(2,'The Expanse',NULL,NULL),(3,'Junie B. Jones',NULL,NULL);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-25 20:23:44
