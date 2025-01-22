import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">MangaView - 隐私政策</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">引言</h2>
            <p className="text-gray-600 dark:text-gray-300">
              欢迎使用MangaView应用。我们非常重视您的隐私保护。本隐私政策旨在说明我们如何处理用户信息。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">信息收集</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              MangaView是一个纯本地应用程序，用于在 macOS 系统上浏览本地漫画内容。我们承诺：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>不收集任何个人信息</li>
              <li>不追踪用户行为</li>
              <li>不上传任何本地文件</li>
              <li>不需要网络连接即可使用</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">数据存储</h2>
            <p className="text-gray-600 dark:text-gray-300">
              所有漫画内容均存储在用户本地设备上，应用程序不会将任何数据传输到外部服务器。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">权限说明</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">本应用仅需要以下权限：</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>文件读取权限：用于访问本地漫画文件</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">联系我们</h2>
            <p className="text-gray-600 dark:text-gray-300">
              如果您对本隐私政策有任何疑问，请通过 App Store 中的开发者联系方式与我们联系。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">隐私政策更新</h2>
            <p className="text-gray-600 dark:text-gray-300">
              我们可能会不时更新本隐私政策。任何重大变更都会通过应用更新时通知用户。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy; 