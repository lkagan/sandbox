<?php

function getOdd(int $max): Iterable
{
    for ($i = 1; $i <= $max; $i += 2) {
        yield $i;
    }
}

foreach (getOdd(5) as $value) {
    print $value . PHP_EOL;
}