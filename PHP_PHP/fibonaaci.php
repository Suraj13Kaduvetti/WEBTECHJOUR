<html>
    <head>
        <title>Calculating the Fibonacci Series</title>
    </head>
    <body>
        <?php
            $num = 0;
            $n1 = 0;
            $n2 = 1;
            echo $n1.$n2;
            while($num < 10)
            {
                $n3 = $n2 + $n1;
                $n1 = $n2;
                $n2 = $n3;
                $num = $num + 1;
                echo $n2;
            }
        ?>
    </body>
</html>