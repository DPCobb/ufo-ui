FROM php:7.4.8-apache
RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN apt update && apt install nano
RUN a2enmod rewrite


