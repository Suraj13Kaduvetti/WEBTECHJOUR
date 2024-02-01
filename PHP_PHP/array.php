<html>
    <head>
        <title>Working with Array</title>
    </head>
    <body>
        <?php
            echo "1D Array";
            $student = array ("A","B","C","D");
            echo count($student);
        ?>
        <?php
            echo "Associative Array";
            $students = array (
                "E" => 1,
                "F" => 2,
                "G" => 3,
                "H" => 4
            );
            echo "Roll No of E : ".$student["E"];
        ?>
        <?php
            echo "Indexed Array";
            $student1[0] = "I";
            $student1[2] = "J";
            $student1[4] = "K";
            $student1[8] = "L";
            echo $student1[2];
        ?>
        <?php
            echo "MultiDimensional Array";
            $student2 = array (
                "M" => array (
                    "N" => 5,
                    "O" => 6
                ),
                "P" => array (
                    "Q" => 7,
                    "R" => 8
                ),
                "S" => array (
                    "T" => 9,
                    "U" => 10
                ),
                "V" => array(
                    "W" => 11,
                    "X"=> 10
                )
            );
            echo "ID of P is with R".$student2["S"]["R"];
        ?>
    </body>
</html>