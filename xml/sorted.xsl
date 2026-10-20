<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
    <title>Sorted Students</title>
    <style>
        body {
            font-family: Arial;
            margin: 20px;
        }
        h2 {
            color: blue;
        }
        table {
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
        }
    </style>
</head>
<body>
    <h2>Students Sorted by Marks</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Mark</th>
        </tr>
        <xsl:for-each select="students/student">
            <xsl:sort select="mark"
                      data-type="number"
                      order="descending"/>
            <tr>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="department"/></td>
                <td><xsl:value-of select="mark"/></td>
            </tr>
        </xsl:for-each>
    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
