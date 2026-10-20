<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
    <title>Student List</title>
    <style>
        body {
            font-family: Arial;
            margin: 20px;
        }
        h2 {
            color: blue;
        }
    </style>
</head>
<body>
    <h2>Student List</h2>
    <ol>
        <xsl:for-each select="students/student">
            <li>
                <xsl:value-of select="name"/>
                - <xsl:value-of select="mark"/>
            </li>
        </xsl:for-each>
    </ol>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
