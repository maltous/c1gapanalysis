function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CcqZt7T63H":
        Script1();
        break;
      case "6bNakV4u0bD":
        Script2();
        break;
      case "6gPxfWq1TK8":
        Script3();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  window.print();
}

