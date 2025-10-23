import ConversationalAgent from "@/components/ConversationalAgent";

const RCHOfficial = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Embedded Live RCH Website in iframe */}
      <iframe
        src="https://www.rch.org.au/home/"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        title="Royal Children's Hospital Melbourne Official Website"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation allow-cookies"
      />

      {/* Conversational Agent Overlay */}
      <ConversationalAgent />
    </div>
  );
};

export default RCHOfficial;
