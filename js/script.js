function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

const started_date = Date.parse('02 Jan 2022 18:43:00');

async function afficherDate() 
{
    while(true) 
    {
        await pause(1000);
        
        var actual_time = new Date();
        var difference = Math.floor((actual_time - started_date)/1000);

        const days = Math.floor(difference/86400);
        difference -= days*86400;

        const hours = Math.floor(difference / 3600) % 24;
        difference -= hours * 3600;

        const minutes = Math.floor(difference / 60) % 60;
        difference -= minutes * 60;

        var elapsed_time = "";
        elapsed_time += `${days} days, `;

        elapsed_time += `${hours} h : `;

        elapsed_time += `${minutes} min `;
        elapsed_time += `${difference} sec`;
        document.getElementById('elapsed_time').innerHTML = elapsed_time;
    }
}
afficherDate();