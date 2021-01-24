'use Strict';
class Financial{
    constructor(Sales =0,Cost=0,Expenses=0
                ,NonOperatingIncome=0,NonOperatingExpenses=0
                ,ExtraordinaryIncome=0,ExtraordinaryExpenses=0
                ,Taxes=0
                ,CurrentAsset=0
                ,Cash = 0
                ,SecuritiesInvestments = 0
                ,FixedAsset = 0
                ,CurrentLiabilities = 0
                ,Equity =0
                ){
        this.Sales =Number(Sales);
        this.Cost =Number(Cost);
        this.Expenses =Number(Expenses);
        this.NonOperatingIncome =Number(NonOperatingIncome);
        this.NonOperatingExpenses =Number(NonOperatingExpenses);
        this.ExtraordinaryIncome =Number(ExtraordinaryIncome);
        this.ExtraordinaryExpenses =Number(ExtraordinaryExpenses);
        this.Taxes =Number(Taxes);
        this.CurrentAsset =Number(CurrentAsset);
        this.Cash =Number(Cash);
        this.SecuritiesInvestments =Number(SecuritiesInvestments);
        this.FixedAsset =Number(FixedAsset);
        this.CurrentLiabilities =Number(CurrentLiabilities);
        this.Equity =Number(Equity);

    }
    getProfit(){
        let Profit = this.Sales-this.Cost;
        return Profit;
    }
    getRevenue(){
        let Profit = this.getProfit();
        let Revenue = Profit-this.Expenses;
        return Revenue;
    }
    getOrdinaryIncome(){
        let Revenue = this.getRevenue();
        let OrdinaryIncome = Revenue+this.NonOperatingIncome-this.NonOperatingExpenses;
        return OrdinaryIncome;
    }
    getNetIncome(){
        let OrdinaryIncome = this.getOrdinaryIncome();
        let NetIncome = OrdinaryIncome+this.ExtraordinaryIncome-this.ExtraordinaryExpenses-this.Taxes;
        return NetIncome;
    }
    getFixedLiabilities(){
        let FixedLiabilities = (this.CurrentAsset+this.FixedAsset)-(this.CurrentLiabilities+this.Equity)
        return FixedLiabilities;
    }
    getProfitMargin(){
        let Revenue = this.getRevenue();
        let ProfitMargin = Revenue/this.Sales;
        return Math.round(ProfitMargin * 100 * 100) / 100;
    }
    getROA(){
        let NetIncom = this.getNetIncome();
        let ROA = NetIncom/(this.CurrentAsset+this.FixedAsset);
        return Math.round(ROA * 100 * 100) / 100 ;
    }
    getROE(){
        let NetIncom = this.getNetIncome();
        let ROE = NetIncom/this.Equity;
        return Math.round(ROE * 100 * 100) / 100 ;
    }
    getCapitalAdequacyRatio(){
        let CapitalAdequacyRatio = this.Equity/(this.CurrentAsset + this.FixedAsset);
        //return CapitalAdequacyRatio;
        return Math.round(CapitalAdequacyRatio * 100 * 100) / 100 ;
    }
    getCurrentRatio(){
        let CurrentRatio = this.CurrentAsset/(this.CurrentLiabilities);
        return Math.round(CurrentRatio * 100 * 100) / 100 ;
    }
    getFixedRatio(){
        let FixedRatio = this.FixedAsset/this.Equity;
        return Math.round(FixedRatio * 100 * 100) / 100 ;
    }
    getInterestCoverageRatio(){
        let Revenue = this.getRevenue();
        let InterestCoverageRatio = (Revenue+this.NonOperatingIncome)/this.NonOperatingExpenses
        return InterestCoverageRatio;
    }
    getShortLiquidity(){
        let ShortLiquidity =  (this.Cash+this.SecuritiesInvestments)/(this.Sales/12)
        return ShortLiquidity;
    }

}


function checkElementsArray(array){

}

function onCalcFinancialButoonClick() {
    
    //get
    let Sales = document.getElementById("SalesInput");
    let Cost = document.getElementById("CostInput");
    let Expenses = document.getElementById("ExpensesInput");
    let NonOperatingIncome =document.getElementById("NonOperatingIncome");
    let NonOperatingExpenses =document.getElementById("NonOperatingExpenses");
    let ExtraordinaryIncome =document.getElementById("ExtraordinaryIncome");
    let ExtraordinaryExpenses =document.getElementById("ExtraordinaryExpenses");
    let Taxes =document.getElementById("Taxes");
    
    let CurrentAsset = document.getElementById("CurrentAsset");
    let Cash = document.getElementById("Cash");
    let SecuritiesInvestments = document.getElementById("SecuritiesInvestments");
    let FixedAsset = document.getElementById("FixedAsset");
    let CurrentLiabilities = document.getElementById("CurrentLiabilities");
    let Equity =document.getElementById("Equity");

    //Check
    errorFLG = 0  
    let CheckArray = [];
    CheckArray.push(Sales,Cost,Expenses
        ,NonOperatingIncome,NonOperatingExpenses
        ,ExtraordinaryIncome,ExtraordinaryExpenses
        ,Taxes
        ,CurrentAsset,Cash ,SecuritiesInvestments
        ,FixedAsset 
        ,CurrentLiabilities 
        ,Equity);
       
    CheckArray.forEach(function(e){  
        e.classList.remove("redInput");
        document.getElementById("Msg").textContent="";
        if(e.value.length===0){
            errorFLG = 1;
            e.classList.add("redInput");
        }
    });
    if (errorFLG===1) {
        document.getElementById("Msg").textContent="赤枠を記入してください。"
        return 0;
    }
    

    //new
    let objFinancial = new Financial(
        Sales.value,Cost.value,Expenses.value      
        ,NonOperatingIncome.value,NonOperatingExpenses.value
        ,ExtraordinaryIncome.value,ExtraordinaryExpenses.value
        ,Taxes.value
        ,CurrentAsset.value
        ,Cash.value
        ,SecuritiesInvestments.value
        ,FixedAsset.value
        ,CurrentLiabilities.value
        ,Equity.value);
    
        // let x = objFinancial.getFixedRatio();
        // console.log(x);
    //showBOXcreate
    document.getElementById("Profit").textContent = objFinancial.getProfit();
    document.getElementById("Revenue").textContent = objFinancial.getRevenue();
    document.getElementById("OrdinaryIncome").textContent = objFinancial.getOrdinaryIncome();
    document.getElementById("NetIncome").textContent = objFinancial.getNetIncome();
    document.getElementById("ProfitMargin").textContent = objFinancial.getProfitMargin();
    document.getElementById("ROA").textContent = objFinancial.getROA();
    document.getElementById("ROE").textContent = objFinancial.getROE();
    document.getElementById("CapitalAdequacyRatio").textContent = objFinancial.getCapitalAdequacyRatio();
    document.getElementById("CurrentRatio").textContent = objFinancial.getCurrentRatio();
    document.getElementById("FixedRatio").textContent = objFinancial.getFixedRatio();
    document.getElementById("InterestCoverageRatio").textContent = objFinancial.getInterestCoverageRatio();
    document.getElementById("ShortLiquidity").textContent = objFinancial.getShortLiquidity();
    document.getElementById("FixedLiabilities").textContent = objFinancial.getFixedLiabilities();
    // document.getElementById("OperatingFunds").textContent = objFinancial.getOperatingFunds();

    //show
    document.getElementById("resultMessage").classList.remove("displayNone");
   

}
