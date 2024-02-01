<html>
    <head>
        <title>File Reading and Writing</title>
    </head>
    <body>
        <?php
            $filename = "php.txt";
            $file = fopen($filename,"r");
            if($file == false)
            {
                echo "Having Problem";
                exit();
            }
            $filesize = filesize($filename);
            $filetext = fread($file,$filesize);
            fclose($file);
            echo "File Size : .$filesize bytes";
        ?>
        <?php
            $filename = "php.txt";
            $file = fopen($filename,"w");
            if($file == false)
            {
                echo "Having Problem";
                exit();
            }
            $filesize = filesize($filename);
            $txt = "\nPHP is great when practiced\n";
            $filetext = fwrite($file,$txt);
            fclose($file);
            echo "Text Inserted is $txt";
        ?>
    </body>
</html>