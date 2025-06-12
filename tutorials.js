function showFAQs(topic) {
  switch (topic) {
    case 'whatsapp':
      window.location.href = 'whatsapp-faqs.html';
      break;
    case 'paytm':
      window.location.href = 'paytm-faqs.html';
      break;
    case 'googlemaps':
      window.location.href = 'googlemaps-faqs.html';
      break;
    default:
      alert('Topic not found!');
  }
}
