<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
    <title>Student Details</title>
    <style>
        body {
            font-family: Arial;
            margin: 20px;
        }
        h2, h3 {
            color: blue;
        }
    </style>
</head>
<body>
    <h2>Student Details</h2>
    <xsl:for-each select="students/student">
        <h3><xsl:value-of select="name"/></h3>
        <p>Department: <xsl:value-of select="department"/></p>
        <p>Mark: <xsl:value-of select="mark"/></p>
        <hr/>
    </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
