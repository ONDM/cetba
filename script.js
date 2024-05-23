document.addEventListener('DOMContentLoaded', function ()
{
  document.getElementById('script').focus();
  document.getElementById('content').classList.add('hidden');
  document.getElementById('script-form').classList.remove('hidden');

  // ENTER CONF
  document.getElementById('script').addEventListener('keyup', function(event)
  {
    if (event.key === 'Enter')
    {
      checkscript();
    }
  });

  var buttons = document.querySelectorAll('.buttons-container button');
  buttons.forEach(function(button)
  {
    button.addEventListener('click', function()
    {
      // ČÍSLO TLAČÍTKA
      var buttonNumber = button.querySelector('.button-number').innerText;
      // ID PRO TLAČÍTKO
      var contentId = 'content-' + buttonNumber;
      // ID OBSAH
      var content = document.getElementById(contentId);
      // SKRYTÍ OBSAHU
      document.querySelectorAll('.content').forEach(function(item) {
        item.classList.add('hidden');
      });
      // ZOBRAZENÍ OBSAHU
      if (content)
      {
        // SKRYTÍ TLAČÍTEK
        document.querySelector('.buttons-container').classList.add('hidden');
        // ZOBRAZENÍ OBSAHU
        content.classList.remove('hidden');
        // ZOBRAZENÍ TLAČÍTKA ZPĚT OD 1 DO 20
        if (buttonNumber >= 1 && buttonNumber <= 20)
        {
          content.innerHTML += '<button onclick="goBack()"><span class="button-number">B</span>Zpět</button>';
          // PŘIDÁNÍ OBRÁZKŮ PRO KNIHY - DRUHÝ OBSAH
          if (buttonNumber === 1)
          {
            contentDiv.innerHTML += '<img src="folder/1/1A.jpg" alt="Hamlet Image"><img src="folder/1/1B.jpg" alt="Hamlet Image">';
          }
          if (buttonNumber === 2)
          {
            contentDiv.innerHTML += '<img src="folder/2/2A.jpg" alt="Romeo a Julie Image"><img src="folder/2/2B.jpg" alt="Romeo a Julie Image">';
          }
          if (buttonNumber === 3)
          {
            contentDiv.innerHTML += '<img src="folder/3/3A.jpg" alt="Robinson Crusoe Image"><img src="folder/3/3B.jpg" alt="Robinson Crusoe Image">';
          }
          if (buttonNumber === 4)
          {
            contentDiv.innerHTML += '<img src="folder/4/4A.jpg" alt="Kral Lavra Image"><img src="folder/4/4B.jpg" alt="Kral Lavra Image">';
          }
          if (buttonNumber === 5)
          {
            contentDiv.innerHTML += '<img src="folder/5/5A.jpg" alt="Maj Image"><img src="folder/5/5B.jpg" alt="Maj Image">';
          }
          if (buttonNumber === 6)
          {
            contentDiv.innerHTML += '<img src="folder/6/6A.jpg" alt="Strakonicky dudak Image"><img src="folder/6/6B.jpg" alt="Strakonicky dudak Image">';
          }
          if (buttonNumber === 7)
          {
            contentDiv.innerHTML += '<img src="folder/7/7A.jpg" alt="Otec Goriot Image"><img src="folder/7/7B.jpg" alt="Otec Goriot Image">';
          }
          if (buttonNumber === 8)
          {
            contentDiv.innerHTML += '<img src="folder/8/8A.jpg" alt="Na zapadni fronte klid Image"><img src="folder/8/8B.jpg" alt="Na zapadni fronte klid Image">';
          }
          if (buttonNumber === 9)
          {
            contentDiv.innerHTML += '<img src="folder/9/9A.jpg" alt="Maly princ Image"><img src="folder/9/9B.jpg" alt="Maly princ Image">';
          }
          if (buttonNumber === 10)
          {
            contentDiv.innerHTML += '<img src="folder/10/10A.jpg" alt="Petr a Lucie Image"><img src="folder/10/10B.jpg" alt="Petr a Lucie Image">';
          }
          if (buttonNumber === 11)
          {
            contentDiv.innerHTML += '<img src="folder/11/11A.jpg" alt="Sbohem armado Image"><img src="folder/11/11B.jpg" alt="Sbohem armado Image">';
          }
          if (buttonNumber === 12)
          {
          contentDiv.innerHTML += '<img src="folder/12/12A.jpg" alt="Pygmalion Image"><img src="folder/12/12B.jpg" alt="Pygmalion Image">';
          }
          if (buttonNumber === 13)
          {
            contentDiv.innerHTML += '<img src="folder/13/13A.jpg" alt="Smrt krasnych srncu Image"><img src="folder/13/13B.jpg" alt="Smrt krasnych srncu Image">';
          }
          if (buttonNumber === 14)
          {
            contentDiv.innerHTML += '<img src="folder/14/14A.jpg" alt="Bylo nas pet Image"><img src="folder/14/14B.jpg" alt="Bylo nas pet Image">';
          }
          if (buttonNumber === 15)
          {
          contentDiv.innerHTML += '<img src="folder/15/15A.jpg" alt="Slavnosti snezenek Image"><img src="folder/15/15B.jpg" alt="Slavnosti snezenek Image">';
          }
          if (buttonNumber === 16)
          {
            content.innerHTML += '';
          }
          if (buttonNumber === 17)
          {
            content.innerHTML += '';
          }
          if (buttonNumber === 18)
          {
            content.innerHTML += '';
          }
          if (buttonNumber === 19)
          {
            content.innerHTML += '';
          }
          if (buttonNumber === 20)
          {
            content.innerHTML += '';
          }
        }
      }
    });
  });

  // SKRYTÍ OBSAHU PO NAČTENÍ STRÁNKY
  document.querySelectorAll('.content').forEach(function(item)
  {
    item.classList.add('hidden');
  });
});

var failedAttemptsKey = 'failedAttempts';
var blockDuration = 600000;
var storedPasswordHash = '605168aceb73437a516f06a3a72090658284a6ede290dfa73a9dbff9ef34c72b';

function hashPassword(password)
{
  return CryptoJS.SHA256(password).toString();
}

function checkscript()
{
  var scriptInput = document.getElementById('script');
  var enteredScript = scriptInput.value;
  var enteredScriptHash = hashPassword(enteredScript);
  var failedAttempts = JSON.parse(localStorage.getItem(failedAttemptsKey)) || {};
  var ipAddress = '';

  if (!failedAttempts[ipAddress])
  {
    failedAttempts[ipAddress] = { count: 0, lastAttempt: Date.now() };
  }

  var currentTime = Date.now();
  var timeElapsed = currentTime - failedAttempts[ipAddress].lastAttempt;

  if (timeElapsed > blockDuration && failedAttempts[ipAddress].count >= 3)
  {
    failedAttempts[ipAddress] = { count: 0, lastAttempt: currentTime };
  }

  if (failedAttempts[ipAddress].count >= 3)
  {
    document.getElementById('incorrect-script').innerText = 'Příliš mnoho neúspěšných pokusů. Zkus to později.';
    document.getElementById('incorrect-script').classList.remove('hidden');
    scriptInput.disabled = true;
    document.getElementById('unlock-button').disabled = true;
    localStorage.setItem(failedAttemptsKey, JSON.stringify(failedAttempts));

    setTimeout(function ()
    {
      scriptInput.disabled = false;
      failedAttempts[ipAddress] = { count: 0, lastAttempt: Date.now() };
      document.getElementById('incorrect-script').classList.add('hidden');
      document.getElementById('unlock-button').disabled = false;
      localStorage.setItem(failedAttemptsKey, JSON.stringify(failedAttempts));
    }, blockDuration);

    return;
  }

  if (enteredScriptHash === storedPasswordHash)
  {
    document.getElementById('script-form').style.display = 'none';
    document.getElementById('content').style.display = 'flex';
    document.getElementById('incorrect-script').classList.add('hidden');
    failedAttempts[ipAddress] = { count: 0, lastAttempt: Date.now() };
    localStorage.setItem(failedAttemptsKey, JSON.stringify(failedAttempts));
  }
  else
  {
    if (failedAttempts[ipAddress].count === 2)
    {
      document.getElementById('incorrect-script').innerText = 'Neplatné heslo. Zadávání bylo zablokováno.';
      scriptInput.disabled = true;
      document.getElementById('unlock-button').disabled = true;
    }
    else
    {
      var remainingAttempts = 2 - failedAttempts[ipAddress].count;
      var attemptsText = remainingAttempts === 1 ? 'pokus' : 'pokusy';
      var text = remainingAttempts === 1 ? 'Zbývá 1 ' + attemptsText : 'Zbývají ' + remainingAttempts + ' ' + attemptsText;
      document.getElementById('incorrect-script').innerText = 'Neplatné heslo. ' + text + '.';
    }

    document.getElementById('incorrect-script').classList.remove('hidden');
    failedAttempts[ipAddress].count++;
    failedAttempts[ipAddress].lastAttempt = Date.now();
    scriptInput.value = '';
  }

  localStorage.setItem(failedAttemptsKey, JSON.stringify(failedAttempts));
}

// FUNKCE PRO ZOBRAZENÍ OBSAHU
function showContent(buttonNumber)
{
  // ZÍSKÁNÍ ELEMENTU S ID 'CONTENT'
  var contentDiv = document.getElementById('content');
  // OVĚŘENÍ O NALEZENÍ ELEMENTU
  if (!contentDiv)
  {
    console.error("Element s ID 'content' nebyl nalezen.");
    return;
  }
  // SKRYTÍ OBSAHU
  document.querySelectorAll('.content').forEach(function(item)
  {
    item.classList.add('hidden');
  });    
