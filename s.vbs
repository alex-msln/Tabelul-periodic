Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objShell = CreateObject("WScript.Shell")
strFolder = "C:\Users\Alexei\Desktop\periodic-table.io-master - Copy"

' Function to read file content
Function ReadFile(filePath)
    Set objFile = objFSO.OpenTextFile(filePath, 1)
    ReadFile = objFile.ReadAll()
    objFile.Close
End Function

' Function to write file content
Sub WriteFile(filePath, content)
    Set objFile = objFSO.OpenTextFile(filePath, 2)
    objFile.Write content
    objFile.Close
End Sub

' Process HTML files in the folder
If objFSO.FolderExists(strFolder) Then
    Set folder = objFSO.GetFolder(strFolder)
    
    For Each file In folder.Files
        fileName = file.Name
        
        ' Check if it's an HTML file
        If LCase(objFSO.GetExtensionName(fileName)) = "html" Then
            ' Get full path
            fullPath = objFSO.BuildPath(strFolder, fileName)
            
            ' Read file content
            strContent = ReadFile(fullPath)
            
            ' Find start and end positions of the footer section
            startPos = InStr(1, strContent, "<section class='footer grayText'>", 1)
            If startPos > 0 Then
                ' Find the end of analytics section
                endPos = InStr(startPos, strContent, "<!-- End Cloudflare Web Analytics -->", 1)
                If endPos > 0 Then
                    ' Remove the footer section and analytics script
                    strNewContent = Left(strContent, startPos - 1) & _
                                  Mid(strContent, endPos + 35)
                    
                    ' Write the modified content back to the file
                    WriteFile fullPath, strNewContent
                    
                    WScript.Echo "Processed: " & fileName
                End If
            End If
        End If
    Next
    
    WScript.Echo "Processing complete!"
Else
    WScript.Echo "Folder not found: " & strFolder
End If