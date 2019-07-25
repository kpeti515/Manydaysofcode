function SaveData(passForm) {

    set fso = CreateObject("Scripting.FileSystemObject");
    set s = fso.CreateTextFile("saveddatas.txt", True);

    var Name = document.getElementById('Name');
    var Email = document.getElementById('email');

    s.writeline("Name :" + Name);
    s.writeline("E-mail :" + Email);

    s.writeline("-----------------------------");
    s.Close();