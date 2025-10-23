import ConversationalAgent from "@/components/ConversationalAgent";

const RCHOfficial = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Static RCH Website served as static files */}
      <iframe
        src="/rch-official/"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        title="Royal Children's Hospital Melbourne Official Website"
        allow="same-origin"
      />

      {/* Conversational Agent Overlay */}
      <ConversationalAgent />
    </div>
  );
};

export default RCHOfficial;
