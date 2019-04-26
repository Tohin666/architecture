<?php

namespace Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class MainCommand extends Command
{
    protected function configure()
    {
        $this
            // имя команды (часть после "bin/console")
            ->setName('app:main')

            // краткое описание, отображающееся при запуске "php bin/console list"
            ->setDescription('Main console command.')

            // полное описание команды, отображающееся при запуске команды
            // с опцией "--help"
            ->setHelp('This is main console command.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->write('Консоль работает!!!');
    }

}