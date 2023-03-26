function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

const started_date = Date.parse('02 Jan 2022 18:43:00');

async function afficherDate() 
{
    while(true) 
    {
        let actual_time = new Date();
        let difference = Math.floor((actual_time - started_date)/1000);

        let days = Math.floor(difference/86400);
        difference -= days*86400;
        let years = "";
        if (days >= 365){
            years = Math.floor(days/365);
            days = days % 365;
        }

        const hours = Math.floor(difference / 3600) % 24;
        difference -= hours * 3600;

        const minutes = Math.floor(difference / 60) % 60;
        difference -= minutes * 60;

        let elapsed_time = "";
        elapsed_time += `${years} years, `;
        elapsed_time += `${days} days `;

        elapsed_time += `${hours} h : `;

        elapsed_time += `${minutes} min `;
        elapsed_time += `${difference} sec`;
        document.getElementById('elapsed_time').innerHTML = elapsed_time;

        await pause(1000);
    }
}
afficherDate();
