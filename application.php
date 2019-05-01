#!/usr/bin/env php
<?php
// application.php

require __DIR__.'/vendor/autoload.php';

use Symfony\Component\Console\Application;

$application = new Application();

// ... зарегистрируйте команды
$application->add(new Command\MainCommand());

$application->run();