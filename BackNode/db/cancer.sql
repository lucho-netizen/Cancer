CREATE DATABASE  IF NOT EXISTS `cancer` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cancer`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: cancer
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atributos`
--

DROP TABLE IF EXISTS `atributos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atributos` (
  `id_atributo` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_atributo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atributos`
--

LOCK TABLES `atributos` WRITE;
/*!40000 ALTER TABLE `atributos` DISABLE KEYS */;
/*!40000 ALTER TABLE `atributos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atributoxuser`
--

DROP TABLE IF EXISTS `atributoxuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atributoxuser` (
  `id_atributoxuser` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `id_atributo` int DEFAULT NULL,
  `valor` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_atributoxuser`),
  KEY `id_user` (`id_user`),
  KEY `id_atributo` (`id_atributo`),
  CONSTRAINT `atributoxuser_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id`),
  CONSTRAINT `atributoxuser_ibfk_2` FOREIGN KEY (`id_atributo`) REFERENCES `atributos` (`id_atributo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atributoxuser`
--

LOCK TABLES `atributoxuser` WRITE;
/*!40000 ALTER TABLE `atributoxuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `atributoxuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnostico`
--

DROP TABLE IF EXISTS `diagnostico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostico` (
  `id_paciente` int NOT NULL,
  `diagnostico` varchar(255) DEFAULT NULL,
  `id_rol` int DEFAULT NULL,
  `id_sintomas` int DEFAULT NULL,
  PRIMARY KEY (`id_paciente`),
  KEY `id_sintomas` (`id_sintomas`),
  KEY `id_rol` (`id_rol`),
  CONSTRAINT `diagnostico_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `usuario` (`id`),
  CONSTRAINT `diagnostico_ibfk_2` FOREIGN KEY (`id_sintomas`) REFERENCES `sintomas` (`id_sintomas`),
  CONSTRAINT `diagnostico_ibfk_3` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostico`
--

LOCK TABLES `diagnostico` WRITE;
/*!40000 ALTER TABLE `diagnostico` DISABLE KEYS */;
/*!40000 ALTER TABLE `diagnostico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado` (
  `estado_id` int NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`estado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (0,'disponible'),(1,'registrado');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultados`
--

DROP TABLE IF EXISTS `resultados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultados` (
  `id_resultado` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `fechaExamen` date DEFAULT NULL,
  `resultadoCancer` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_resultado`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `resultados_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultados`
--

LOCK TABLES `resultados` WRITE;
/*!40000 ALTER TABLE `resultados` DISABLE KEYS */;
/*!40000 ALTER TABLE `resultados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id_role` int NOT NULL,
  `role_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'paciente'),(2,'administrador');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sintomas`
--

DROP TABLE IF EXISTS `sintomas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sintomas` (
  `id_sintomas` int NOT NULL,
  `sintoma` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_sintomas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sintomas`
--

LOCK TABLES `sintomas` WRITE;
/*!40000 ALTER TABLE `sintomas` DISABLE KEYS */;
/*!40000 ALTER TABLE `sintomas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sintomasxuser`
--

DROP TABLE IF EXISTS `sintomasxuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sintomasxuser` (
  `id_sintomasxuser` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `id_sintomas` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_sintomasxuser`),
  KEY `id_user` (`id_user`),
  KEY `id_sintomas` (`id_sintomas`),
  CONSTRAINT `sintomasxuser_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id`),
  CONSTRAINT `sintomasxuser_ibfk_2` FOREIGN KEY (`id_sintomas`) REFERENCES `sintomas` (`id_sintomas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sintomasxuser`
--

LOCK TABLES `sintomasxuser` WRITE;
/*!40000 ALTER TABLE `sintomasxuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `sintomasxuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `googleId` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `tipo_documento` varchar(20) DEFAULT NULL,
  `celular` int DEFAULT NULL,
  `identificacion` int unsigned DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `peso` int DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_role` int DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `estado` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `googleId` (`googleId`),
  KEY `id_role` (`id_role`),
  KEY `usuario_ibfk_2_idx` (`estado`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id_role`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`estado`) REFERENCES `estado` (`estado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,NULL,'wew','ewewe','TI',232323,1212,1,1,'112@i.com','112@i.com',1,'2024-02-17 07:20:22',0),(2,NULL,'admin','admin','CC',2345678,345678,0,0,'admin@i.com','admin@i.com',2,'2024-02-17 07:20:22',1),(3,NULL,'wewewe','ewew','',1222,34343434,20,30,'jhdua@xxx.com','jhdua@xxx.com1',1,'2024-02-17 07:20:22',1),(4,NULL,'wewewe','ewew','',1222,34343434,20,30,'jhdua@xxx.com','jhdua@xxx.com1',1,'2024-02-17 07:20:22',1),(5,NULL,'afvac','acaga','',4353,6565656,21,35,'jhdfas@xxx.com','jhdfas@xxx.com1',1,'2024-02-17 07:20:22',1),(6,NULL,'afvac','acaga','',4353,6565656,21,35,'jhdfas@xxx.com','jhdfas@xxx.com1',1,'2024-02-17 07:20:22',1),(7,NULL,'Luis','Jose','CC',NULL,NULL,12,12,NULL,'ser@i.com',2,'2024-07-19 01:19:35',1),(8,NULL,'pepa','pig','CC',5676567,NULL,37,3,NULL,'sero@i.com',1,'2024-07-19 01:25:18',1),(9,NULL,'Luisa','Jose','TI',NULL,NULL,121,121,'sero@i.como','sero@i.como',1,'2024-07-19 01:34:18',1),(10,NULL,'maria','jose','CC',5775688,12121,24,60,'zero@i.como','zero@i.como',1,'2024-07-19 01:37:18',1),(11,'111067985651154348053','Luis J','No Last Name','Unknown',0,0,0,0,'lj534974@gmail.com','null',1,'2024-07-20 15:10:31',1),(12,'101408401025399466563','Brayner Perez','No Last Name','Unknown',0,0,0,0,'perezbrayner80@gmail.com','null',1,'2024-07-20 15:11:35',1),(13,'110517487857321375806','IngEso','No Last Name','CC',0,0,0,0,'i7695979@gmail.com','null',1,'2024-07-20 15:16:35',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-20 15:21:05
