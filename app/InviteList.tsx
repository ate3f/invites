import {
  FaCheck,
  FaTimes,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
} from "react-icons/fa";

interface Invite {
  id: number;
  created_at: string;
  is_accepted: boolean;
  name: string;
}

interface InviteListProps {
  invites: Invite[];
}

export default function InviteList({ invites }: InviteListProps) {
  const acceptedInvites = invites.filter((invite) => invite.is_accepted);
  const declinedInvites = invites.filter((invite) => !invite.is_accepted);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="md:text-5xl text-2xl font-bold text-[#f1b248] mb-3 tracking-tight">
          Invite Responses
        </h1>
        <p className="text-xl text-[#dc4b56] font-light">VIP Guest List</p>
      </div>

      {/* Summary Stats */}
      <div className="small-box rounded-2xl shadow-2xl p-8 mb-4 border border-[#f1b24833]">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-[#f1b248] mb-2">
              {invites.length}
            </div>
            <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">
              Total Invites
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#74bd91] mb-2">
              {acceptedInvites.length}
            </div>
            <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">
              Accepted
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#ef434d] mb-2">
              {declinedInvites.length}
            </div>
            <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">
              Declined
            </div>
          </div>
        </div>
      </div>

      {/* Invites Grid */}
      <div className="grid lg:grid-cols-2 gap-8 max-h-[calc(100vh-400px)] overflow-y-auto">
        {/* Accepted Invites */}
        <div className="small-box rounded-2xl shadow-2xl overflow-hidden border border-[#74bd9133]">
          <div className="bg-gradient-to-r from-[#74bd91] to-[#5da577] text-white px-6 py-5 flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <FaUserCheck className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Accepted</h3>
              <p className="text-white/80 text-sm">
                {acceptedInvites.length} confirmations
              </p>
            </div>
          </div>
          <div className="p-6">
            {acceptedInvites.length === 0 ? (
              <div className="text-center text-white/50 py-12">
                <FaUsers className="text-5xl mx-auto mb-4 text-white/30" />
                <p className="text-lg">No confirmations yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {acceptedInvites.map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center justify-between p-4 bg-[#74bd9115] rounded-xl border border-[#74bd9133]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#74bd91] to-[#5da577] rounded-full flex items-center justify-center shadow-lg">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">
                          {invite.name}
                        </p>
                        <p className="text-xs text-white/60">
                          {formatDate(invite.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Declined Invites */}
        <div className="small-box rounded-2xl shadow-2xl overflow-hidden border border-[#ef434d33]">
          <div className="bg-gradient-to-r from-[#ef434d] to-[#d83859] text-white px-6 py-5 flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <FaUserTimes className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Declined</h3>
              <p className="text-white/80 text-sm">
                {declinedInvites.length} regrets
              </p>
            </div>
          </div>
          <div className="p-6">
            {declinedInvites.length === 0 ? (
              <div className="text-center text-white/50 py-12">
                <FaUsers className="text-5xl mx-auto mb-4 text-white/30" />
                <p className="text-lg">No declines yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {declinedInvites.map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center justify-between p-4 bg-[#ef434d15] rounded-xl border border-[#ef434d33]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#ef434d] to-[#d83859] rounded-full flex items-center justify-center shadow-lg">
                        <FaTimes className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">
                          {invite.name}
                        </p>
                        <p className="text-xs text-white/60">
                          {formatDate(invite.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
