-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2021 a las 22:00:13
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dds_tp3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barberias`
--

CREATE TABLE `barberias` (
  `id_barberia` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `time_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `time_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `barberias`
--

INSERT INTO `barberias` (`id_barberia`, `nombre`, `email`, `password`, `time_created`, `time_updated`) VALUES
(1, 'barberOne', 'barber@abc.com', 'contraseña', '2021-11-04 13:23:18', '2021-11-04 13:23:18'),
(2, 'barberTwo', 'barberTwo@abc.com', 'contraseña', '2021-11-04 13:24:01', '2021-11-04 13:24:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `time_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `time_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre`, `apellido`, `email`, `time_created`, `time_updated`) VALUES
(1, 'valentin', 'martorelli', 'valentinmartorelli@gmail.com', '2021-11-04 13:09:08', '2021-11-04 13:09:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `id_direccion` int(11) NOT NULL,
  `id_barberia` int(11) NOT NULL,
  `nombre_calle` varchar(100) NOT NULL,
  `numero_calle` int(11) NOT NULL,
  `time_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `time_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id_turno` int(11) NOT NULL,
  `id_barberia` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `time_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `time_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id_turno`, `id_barberia`, `id_cliente`, `fecha`, `hora`, `time_created`, `time_updated`) VALUES
(1, 1, 1, '2021-11-05', '17:00:00', '2021-11-04 14:34:38', '2021-11-04 14:34:38'),
(2, 1, 1, '2021-11-15', '14:00:00', '2021-11-04 14:36:39', '2021-11-04 14:36:39');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `barberias`
--
ALTER TABLE `barberias`
  ADD PRIMARY KEY (`id_barberia`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`id_direccion`),
  ADD KEY `fk_direcciones_barberias` (`id_barberia`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id_turno`),
  ADD KEY `fk_turnos_barberias` (`id_barberia`),
  ADD KEY `fk_turnos_clientes` (`id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `barberias`
--
ALTER TABLE `barberias`
  MODIFY `id_barberia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `id_direccion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id_turno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `fk_direcciones_barberias` FOREIGN KEY (`id_barberia`) REFERENCES `barberias` (`id_barberia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `fk_turnos_barberias` FOREIGN KEY (`id_barberia`) REFERENCES `barberias` (`id_barberia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_turnos_clientes` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
