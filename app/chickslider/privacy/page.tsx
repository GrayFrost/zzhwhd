import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "梗百鸡隐私政策",
  description: "梗百鸡游戏隐私政策",
};

const sections = [
  {
    title: "一、我们如何收集和使用您的信息",
    content: (
      <>
        <p>
          为向您提供游戏服务，我们仅在实现具体功能所必需的范围内处理相关信息。若未来新增信息处理目的、信息类型或使用方式，我们将按照法律法规要求另行告知，并在必要时重新取得您的同意。
        </p>

        <h3 className="font-semibold text-foreground">1. 本地游戏数据</h3>
        <p>
          游戏会在您的设备本地保存关卡进度、历史最好成绩、声音设置和隐私政策同意版本，用于继续游戏、展示成绩及恢复设置。这些数据保存在应用本地存储中，卸载应用或清除应用数据后将被删除。
        </p>

        <h3 className="font-semibold text-foreground">2. TapTap 登录及相关服务</h3>
        <p>
          在您同意本政策后，游戏会初始化 TapSDK。当您主动使用 TapTap 登录、云存档或排行榜功能时，可能会处理您的 TapTap 公开资料（如昵称、头像）、账号标识、云存档和排行榜数据。TapSDK 还可能处理网络状态、Wi-Fi 信息、设备型号、系统版本、Android ID 等设备与网络信息，用于账号登录、服务兼容、安全保障及故障排查。
        </p>
        <p>
          TapTap 服务由易玩（上海）网络科技有限公司提供。具体处理规则请参阅
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="https://developer.taptap.cn/docs/sdk/start/agreement/"
            target="_blank"
            rel="noreferrer"
          >
            TapSDK 隐私政策
          </a>
          。
        </p>

        <h3 className="font-semibold text-foreground">3. 激励广告</h3>
        <p>
          挑战失败后，只有在您主动选择“看广告继续”时，游戏才会请求并展示激励广告。当前接入的 TapADN / Dirichlet 广告 SDK 可能处理设备信息、网络信息、广告交互信息及必要的标识符，用于广告展示、归因、反作弊和统计。您可以不观看广告，这不会影响重新挑战或其他基础玩法。
        </p>
        <p>
          TapADN SDK 由上海艾得蒽数字科技有限公司及其关联方提供，可能处理设备基础信息、OAID、网络状态、IP 地址、应用包名及版本、应用前后台状态、广告展示、点击和转化数据、崩溃及性能数据，用于广告展示、监测归因、反作弊、统计分析及保障服务稳定。具体处理规则请参阅
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="https://ssp.dirichlet.cn/docs/agreement/"
            target="_blank"
            rel="noreferrer"
          >
            TapADN SDK 隐私政策
          </a>
          。
        </p>

        <h3 className="font-semibold text-foreground">4. 网络与服务安全</h3>
        <p>
          为保障账号、网络和游戏服务安全，相关服务可能处理 IP 地址、设备及系统信息、访问时间、网络状态和服务日志，用于识别异常行为、排查故障及维护服务稳定运行。
        </p>
      </>
    ),
  },
  {
    title: "二、设备权限调用情况",
    content: (
      <>
        <p>
          当前版本仅声明互联网访问权限，用于 TapTap 登录、云存档、排行榜以及您主动请求的激励广告。游戏不主动申请定位、相机、麦克风、通讯录、电话或外部存储权限。
        </p>
        <p>
          若后续版本新增设备权限，我们将在调用前向您说明使用目的，并在取得必要授权后使用。您可以在设备的系统设置中管理已授予的权限。
        </p>
      </>
    ),
  },
  {
    title: "三、我们如何保存您的信息",
    content: (
      <>
        <p>
          本地游戏数据会在您使用游戏期间保存在设备中。涉及 TapTap 服务及广告服务的数据，其保存地点和期限由相应服务提供方依据其隐私政策及法律法规确定。
        </p>
        <p>
          我们仅在实现本政策所述目的所需的最短期限内保存相关信息，法律法规另有规定的除外。保存期限届满后，我们将依法删除或匿名化处理相关信息。
        </p>
      </>
    ),
  },
  {
    title: "四、我们如何使用 Cookie 和同类技术",
    content: (
      <p>
        本游戏不通过网页 Cookie 收集您的信息。游戏及接入的第三方 SDK 可能使用应用本地存储或类似技术保存登录状态、游戏设置、隐私同意状态及提供服务所必需的数据。第三方服务使用同类技术的具体情况，以其隐私政策为准。
      </p>
    ),
  },
  {
    title: "五、信息的共享、转让和公开披露",
    content: (
      <>
        <p>
          为实现 TapTap 登录、云存档、排行榜和激励广告功能，相关信息可能由前述第三方服务提供方处理。除实现这些功能、取得您的单独同意或法律法规另有规定外，我们不会向其他公司、组织或个人共享您的个人信息。
        </p>
        <p>
          我们不会转让您的个人信息。若因合并、收购、资产转让或类似交易确需转让，我们将依法告知您，并要求新的信息持有方继续受本政策约束。除非取得您的单独同意或法律法规另有规定，我们不会公开披露您的个人信息。
        </p>
      </>
    ),
  },
  {
    title: "六、第三方产品或服务",
    content: (
      <>
        <p>当前游戏使用下列第三方服务：</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>TapSDK：用于 TapTap 登录、公开资料、云存档和排行榜。</li>
          <li>
            TapADN / Dirichlet 广告 SDK：用于在您主动选择后提供激励广告，具体规则请参阅
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="https://ssp.dirichlet.cn/docs/agreement/"
              target="_blank"
              rel="noreferrer"
            >
              Dirichlet 隐私政策
            </a>
            。
          </li>
        </ul>
        <p>
          当前版本接入 TapSDK 4.10.2，并通过项目内广告接入组件使用 TapADN SDK 提供激励广告。游戏未接入穿山甲、优量汇等聚合广告 SDK。第三方服务由其运营方独立提供，并按照其隐私政策处理相关信息。我们会审慎评估第三方服务，并要求其依法保护您的信息；发布前也会核对最终安装包，确保本政策与实际接入的 SDK、信息处理范围及权限保持一致。
        </p>
      </>
    ),
  },
  {
    title: "七、我们如何保护您的信息",
    content: (
      <>
        <p>
          我们采取与信息处理活动相适应的技术和管理措施，防止信息遭到未经授权的访问、披露、篡改、丢失或毁坏。请您理解，互联网环境并非绝对安全，我们将尽力保障您的信息安全。
        </p>
        <p>
          如发生个人信息安全事件，我们将按照法律法规要求采取补救措施，并通过应用内提示、公告或其他适当方式向您告知。
        </p>
      </>
    ),
  },
  {
    title: "八、您如何管理您的信息",
    content: (
      <>
        <p>
          您可以通过清除应用数据或卸载应用删除本地保存的关卡进度、成绩、声音设置和隐私同意记录。清除同意记录后，再次启动游戏时将重新展示隐私政策确认页。
        </p>
        <p>
          与 TapTap 账号、云存档、排行榜或广告服务有关的信息，您可通过相应服务提供方提供的功能或渠道行使访问、更正、删除、撤回同意及注销账号等权利。您也可以通过本政策末尾的联系方式向我们提出请求，我们将在核验您的身份后依法处理。
        </p>
      </>
    ),
  },
  {
    title: "九、未成年人个人信息保护",
    content: (
      <>
        <p>
          我们重视未成年人的个人信息保护。若您是不满十八周岁的未成年人，请在监护人的陪同和指导下阅读本政策，并在取得监护人同意后使用本游戏。
        </p>
        <p>
          对于不满十四周岁的儿童，应由其监护人代为同意本政策。若监护人发现儿童在未取得同意的情况下向我们提供了个人信息，请通过本政策载明的方式联系我们处理。
        </p>
      </>
    ),
  },
  {
    title: "十、本政策如何更新",
    content: (
      <>
        <p>
          我们可能根据服务变化或法律法规要求更新本政策。更新后的政策将在本页面公布。若发生处理目的、信息类型、使用方式或第三方共享对象等重大变化，我们会以显著方式提示您，并在必要时重新取得您的同意。
        </p>
        <p>未经您的明确同意，我们不会削减您按照本政策所享有的权利。</p>
      </>
    ),
  },
  {
    title: "十一、如何联系我们",
    content: (
      <>
        <p>运营主体名称：【树飞个人开发工作室】</p>
        <p>注册地址：【广东省深圳市龙岗区布吉】</p>
        <p>联系邮箱或电话：【18819423808】</p>
        <p>
          如果您对本政策或个人信息保护有疑问、意见、建议或投诉，可以通过上述方式联系我们。一般情况下，我们将在收到并核验您的请求后十五个工作日内予以回复。
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <article className="text-base leading-8 text-muted-foreground">
        <header className="mb-10 border-b border-line pb-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">梗百鸡隐私政策</h1>
          <div className="mt-4 space-y-1 text-sm">
            <p>更新日期：2026 年 11 月 11 日</p>
            <p>生效日期：2026 年 11 月 11 日</p>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">引言</h2>
          <p>
            欢迎您使用《梗百鸡》。我们非常重视您的个人信息和隐私保护。本政策用于说明在您使用《梗百鸡》时，我们如何收集、使用、保存、共享和保护相关信息，以及您如何行使个人信息权利。
          </p>
          <p>
            请您在使用游戏前认真阅读并充分理解本政策。首次启动时，在您点击“同意并继续”前，游戏不会初始化 TapTap 登录、云存档、排行榜或广告服务。若您点击“不同意并退出”，游戏将退出。
          </p>
          <p>
            本政策适用于《梗百鸡》提供的服务。第三方服务提供方独立收集和处理的信息，适用其自身的隐私政策。
          </p>
        </section>

        {sections.map((section) => (
          <section key={section.title} className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
            {section.content}
          </section>
        ))}
      </article>
    </main>
  );
}
