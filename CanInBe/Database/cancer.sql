-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3310
-- Tiempo de generación: 18-02-2024 a las 03:14:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cancer`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atributos`
--

CREATE TABLE `atributos` (
  `id_atributo` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atributoxuser`
--

CREATE TABLE `atributoxuser` (
  `id_atributoxuser` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_atributo` int(11) DEFAULT NULL,
  `valor` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diagnostico`
--

CREATE TABLE `diagnostico` (
  `id_paciente` int(11) NOT NULL,
  `pregunta` int(11) DEFAULT NULL,
  `diagnostico` varchar(255) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `estado_id` int(11) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`estado_id`, `nombre`) VALUES
(0, 'disponible'),
(1, 'registrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados`
--

CREATE TABLE `resultados` (
  `id_resultado` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `fechaExamen` date DEFAULT NULL,
  `resultadoCancer` tinyint(1) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_role` int(11) NOT NULL,
  `role_name` varchar(20) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_role`, `role_name`, `estado_id`, `fecha`) VALUES
(1, 'paciente', NULL, NULL),
(2, 'administrador', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sintomas`
--

CREATE TABLE `sintomas` (
  `id_sintomas` int(11) NOT NULL,
  `sintoma` varchar(255) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sintomasxuser`
--

CREATE TABLE `sintomasxuser` (
  `id_sintomasxuser` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_sintomas` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) NOT NULL,
  `tipo_documento` varchar(20) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `identificacion` int(10) UNSIGNED DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_role` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `tipo_documento`, `celular`, `identificacion`, `edad`, `peso`, `correo`, `password`, `id_role`, `fecha`, `estado`) VALUES
(1, 'wew', 'ewewe', 'TI', 232323, 1212, 1, 1, '112@i.com', '112@i.com', 1, '2024-02-17 07:20:22', 0),
(2, 'admin', 'amin', 'CC', 2345678, 345678, 0, 0, 'admin@i.com', 'admin@i.com', 2, '2024-02-17 07:20:22', 0),
(3, 'wewewe', 'ewew', '', 1222, 34343434, 20, 30, 'jhdua@xxx.com', 'jhdua@xxx.com1', 2, '2024-02-17 07:20:22', 1),
(4, 'wewewe', 'ewew', '', 1222, 34343434, 20, 30, 'jhdua@xxx.com', 'jhdua@xxx.com1', 2, '2024-02-17 07:20:22', 1),
(5, 'afvac', 'acaga', '', 4353, 6565656, 21, 35, 'jhdfas@xxx.com', 'jhdfas@xxx.com1', 2, '2024-02-17 07:20:22', 1),
(6, 'afvac', 'acaga', '', 4353, 6565656, 21, 35, 'jhdfas@xxx.com', 'jhdfas@xxx.com1', 2, '2024-02-17 07:20:22', 1),
(7, 'wekwkek', 'kwkekwek', '', 56789, 23232332, 12, 121, 'marco@i.com', 'marco@i.com1', 2, '2024-02-17 19:33:34', 1),
(8, 'wekwkek', 'kwkekwek', '', 56789, 23232332, 12, 121, 'marco@i.com', 'marco@i.com1', 2, '2024-02-17 19:33:38', 1),
(9, 'hellen', 'arrieta', '', 11111, 111111, 121, 12121, 'hellen@gmail.com', 'hellen@gmail.com1', 2, '2024-02-17 14:37:10', 1),
(10, 'hellen', 'arrieta', '', 11111, 111111, 121, 12121, 'hellen@gmail.com', 'hellen@gmail.com1', 2, '2024-02-17 14:37:16', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `atributos`
--
ALTER TABLE `atributos`
  ADD PRIMARY KEY (`id_atributo`),
  ADD KEY `atributos_ibfk_1` (`estado`);

--
-- Indices de la tabla `atributoxuser`
--
ALTER TABLE `atributoxuser`
  ADD PRIMARY KEY (`id_atributoxuser`),
  ADD KEY `atributoxuser_ibfk_1` (`id_user`),
  ADD KEY `atributoxuser_ibfk_2` (`id_atributo`);

--
-- Indices de la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `diagnostico_ibfk_3` (`id_rol`),
  ADD KEY `diagnostico_ibfk_4` (`estado_id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`estado_id`);

--
-- Indices de la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD PRIMARY KEY (`id_resultado`),
  ADD KEY `resultados` (`estado`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`),
  ADD KEY `roles_ibfk_1` (`estado_id`);

--
-- Indices de la tabla `sintomas`
--
ALTER TABLE `sintomas`
  ADD PRIMARY KEY (`id_sintomas`),
  ADD KEY `sintomas_ibfk_1` (`estado_id`);

--
-- Indices de la tabla `sintomasxuser`
--
ALTER TABLE `sintomasxuser`
  ADD PRIMARY KEY (`id_sintomasxuser`),
  ADD KEY `sintomasxuser_ibfk_1` (`id_user`),
  ADD KEY `sintomasxuser_ibfk_2` (`id_sintomas`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_ibfk_1` (`id_role`),
  ADD KEY `usuario_ibfk_2` (`estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resultados`
--
ALTER TABLE `resultados`
  MODIFY `id_resultado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `atributos`
--
ALTER TABLE `atributos`
  ADD CONSTRAINT `atributos_ibfk_1` FOREIGN KEY (`estado`) REFERENCES `estado` (`estado_id`);

--
-- Filtros para la tabla `atributoxuser`
--
ALTER TABLE `atributoxuser`
  ADD CONSTRAINT `atributoxuser_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `atributoxuser_ibfk_2` FOREIGN KEY (`id_atributo`) REFERENCES `atributos` (`id_atributo`);

--
-- Filtros para la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  ADD CONSTRAINT `diagnostico_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `diagnostico_ibfk_3` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_role`),
  ADD CONSTRAINT `diagnostico_ibfk_4` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`estado_id`);

--
-- Filtros para la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD CONSTRAINT `resultado` FOREIGN KEY (`estado`) REFERENCES `roles` (`id_role`),
  ADD CONSTRAINT `resultados` FOREIGN KEY (`estado`) REFERENCES `estado` (`estado_id`);

--
-- Filtros para la tabla `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `roles` (`id_role`);

--
-- Filtros para la tabla `sintomas`
--
ALTER TABLE `sintomas`
  ADD CONSTRAINT `sintomas_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`estado_id`);

--
-- Filtros para la tabla `sintomasxuser`
--
ALTER TABLE `sintomasxuser`
  ADD CONSTRAINT `sintomasxuser_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `sintomasxuser_ibfk_2` FOREIGN KEY (`id_sintomas`) REFERENCES `sintomas` (`id_sintomas`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id_role`),
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`estado`) REFERENCES `estado` (`estado_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
