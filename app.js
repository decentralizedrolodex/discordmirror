import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "MTE2MTcyMjI5Mzg0MDUxNTE4NA.GVGnlo.uaCDdLXWOn3xiQiqNVjTM7lM3SEhqcF3gZNc3w"
);

gateway.on("message", (m) => {
  if (m.channel_id === "1022495170232586250") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };
    client.sendWebhook(
      "https://discord.com/api/webhooks/1187475016279920710/7GLKcNqjQWUsWsVzV0O1ukRrVK_NcyvrGUW6UYZ93iyqB0_54KG6-xoTf0NYxrj4its_
",
      content
    );
  }
})
