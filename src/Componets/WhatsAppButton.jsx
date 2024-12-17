import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/521XXXXXXXXXX" // Reemplaza XXXXXXXXXX con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 text-white"
        fill="currentColor"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.612.675 5.061 1.851 7.219L2 30l7.012-1.796C11.021 29.225 13.471 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 2c6.617 0 12 5.383 12 12s-5.383 12-12 12c-2.306 0-4.45-.667-6.281-1.813L7.697 27.7 6.2 22.578A11.931 11.931 0 0 1 4 16c0-6.617 5.383-12 12-12zm-2.08 5.01c-.213.004-.475.012-.774.025a.872.872 0 0 0-.62.363c-.218.271-.915 1.102-.915 2.682s.937 3.107 1.067 3.322c.129.215 1.81 2.904 4.362 3.938 2.552 1.033 2.552.689 3.006.652.454-.037 1.5-.591 1.714-1.164.214-.573.214-1.064.152-1.164-.062-.1-.237-.152-.497-.267-.26-.115-1.524-.753-1.76-.839-.236-.085-.409-.13-.58.13-.172.257-.667.839-.819 1.011-.152.171-.302.193-.562.078-.26-.115-1.093-.402-2.08-1.279-.769-.676-1.292-1.51-1.444-1.768-.152-.258-.016-.4.115-.515.117-.104.26-.268.389-.402.129-.133.172-.229.26-.382.087-.153.043-.286-.022-.4-.064-.114-.578-1.372-.792-1.88-.208-.506-.419-.497-.582-.504z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;