import React, { useEffect, useState } from 'react';
import { fetchBudget } from '../api/budgetService';
import BudgetDoughnutChart from '../components/BudgetDoughnutChart';
import BudgetD3Donut from '../components/BudgetD3Donut';

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchBudget()
      .then((data) => {
        if (!mounted) return;
        const items = (data && data.myBudget) || [
          { title: 'Eat out', budget: 30, color: '#ffcd56' },
          { title: 'Rent', budget: 350, color: '#ff6384' },
          { title: 'Groceries', budget: 90, color: '#36a2eb' },
          { title: 'WiFi', budget: 40, color: '#fd7e14' },
          { title: 'Gas', budget: 120, color: '#6f42c1' },
          { title: 'Water', budget: 150, color: '#4169e1' },
          { title: 'Shopping', budget: 110, color: '#20c997' },
          { title: 'Travel', budget: 100, color: '#dc3545' }
        ];
        setItems(items);
      })
      .catch((e) => {
        if (!mounted) return;
        setItems([
          { title: 'Eat out', budget: 30, color: '#ffcd56' },
          { title: 'Rent', budget: 350, color: '#ff6384' },
          { title: 'Groceries', budget: 90, color: '#36a2eb' },
          { title: 'WiFi', budget: 40, color: '#fd7e14' },
          { title: 'Gas', budget: 120, color: '#6f42c1' },
          { title: 'Water', budget: 150, color: '#4169e1' },
          { title: 'Shopping', budget: 110, color: '#20c997' },
          { title: 'Travel', budget: 100, color: '#dc3545' }
        ]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main id="main-content" className="container center" tabIndex="-1">
    
        <section class="page-area" aria-label="Key Features">

            <article className="text-box">
                
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article className="text-box">
                
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article className="text-box">
                
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they live happier lives... since they spend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article className="text-box">
                
                <h2>Free</h2>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article className="text-box">
                
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article className="text-box">
                
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article className="text-box">
                
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they live happier lives... since they spend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article className="text-box">
                
                <h2>Chart</h2>
                <BudgetDoughnutChart items={items} />
            </article>

            <article className="text-box">
                <h2>D3 Donut Chart</h2>
                <BudgetD3Donut items={items} />
            </article>

        </section>
    </main>
  );
}

export default HomePage;