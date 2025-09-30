import React from 'react';

function HomePage() {
  return (
    <main id="main-content" class="container center" tabindex="-1">
    
        <section class="page-area" aria-label="Key Features">

            <article className="text-box">
                
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article class="text-box">
                
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article class="text-box">
                
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they live happier lives... since they spend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article class="text-box">
                
                <h2>Free</h2>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article class="text-box">
                
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article class="text-box">
                
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article class="text-box">
                
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they live happier lives... since they spend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article class="text-box">
                
                <h2>Chart</h2>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </article>

            <article class="text-box">
                <h2>D3 Donut Chart</h2>
                <div id="d3-donut"></div>
            </article>

        </section>
    </main>
  );
}

export default HomePage;