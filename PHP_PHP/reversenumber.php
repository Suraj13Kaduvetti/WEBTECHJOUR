<html>
    <head>
        <title>Calcilating Reverse of a Number</title>
    </head>
    <body>
        <?php
            $num = 23456;
            $revnum = 0;
            while ($num > 1)
            {
                $rem = $num % 10;
                $revnum = ($revnum * 10) + $rem;
                $num = ($num / 10);
            }
            echo "Reverse of $num is $revnum";
        ?>
    </body>
</html>