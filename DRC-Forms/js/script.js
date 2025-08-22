function printExternalPage() {
    const printWindow = window.open('PreviousExperiencePrint.html', '_blank');
    printWindow.onload = function () {
      printWindow.focus();
      printWindow.print();
    };
  }


  function printExternalPageConditions() {
    const printWindow = window.open('ConditionsPrint.html', '_blank');
    printWindow.onload = function () {
      printWindow.focus();
      printWindow.print();
    };
  }


  function printExternalPageAgreement() {
    const printWindow = window.open('ApprenticeshipAgreementPrint.html', '_blank');
    printWindow.onload = function () {
      printWindow.focus();
      printWindow.print();
    };
  }


  