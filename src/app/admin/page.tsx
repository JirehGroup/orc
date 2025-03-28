"use client";

import { Calendar, BookOpen, Mail, Eye, X, Check, Send } from "lucide-react";
import { useState } from "react";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: "new" | "read" | "replied";
}

export default function Dashboard() {
  // Sample contact submissions data
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      subject: "Volunteer Opportunity",
      message: "I would like to volunteer at the community center...",
      date: "2024-03-20",
      status: "new"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Event Inquiry",
      message: "When is the next youth workshop?",
      date: "2024-03-19",
      status: "read"
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      subject: "Donation",
      message: "I would like to make a donation to support...",
      date: "2024-03-18",
      status: "replied"
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState<ContactSubmission | null>(null);
  const [replyText, setReplyText] = useState("");

  const totalSubmissions = contactSubmissions.length;
  const newSubmissions = contactSubmissions.filter(sub => sub.status === "new").length;
  const repliedSubmissions = contactSubmissions.filter(sub => sub.status === "replied").length;

  const handleViewDetails = (submission: ContactSubmission) => {
    setSelectedMessage(submission);
    // Mark as read if it's new
    if (submission.status === "new") {
      setContactSubmissions(contactSubmissions.map(sub =>
        sub.id === submission.id ? { ...sub, status: "read" } : sub
      ));
    }
  };

  const handleCloseModal = () => {
    setSelectedMessage(null);
    setReplyText("");
  };

  const handleMarkAsReplied = () => {
    if (selectedMessage) {
      setContactSubmissions(contactSubmissions.map(sub =>
        sub.id === selectedMessage.id ? { ...sub, status: "replied" } : sub
      ));
      setSelectedMessage({ ...selectedMessage, status: "replied" });
      setReplyText("");
    }
  };

  const handleSendReply = () => {
    if (selectedMessage && replyText.trim()) {
      // Here you would typically send the reply email
      console.log("Sending reply to:", selectedMessage.email);
      console.log("Reply text:", replyText);
      handleMarkAsReplied();
      handleCloseModal();
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Events Overview */}
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Events</h3>
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Events</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Upcoming</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Past Events</span>
              <span className="font-semibold">7</span>
            </div>
          </div>
        </div>

        {/* Blogs Overview */}
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Blogs</h3>
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Posts</span>
              <span className="font-semibold">25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Drafts</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Published</span>
              <span className="font-semibold">22</span>
            </div>
          </div>
        </div>

        {/* Contact Messages Overview */}
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Contact Messages</h3>
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Messages</span>
              <span className="font-semibold">{totalSubmissions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">New Messages</span>
              <span className="font-semibold">{newSubmissions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Replied</span>
              <span className="font-semibold">{repliedSubmissions}</span>
            </div>
          </div>
        </div>

        {/* Views Overview */}
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Views</h3>
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Today</span>
              <span className="font-semibold">1,234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">This Week</span>
              <span className="font-semibold">8,567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">This Month</span>
              <span className="font-semibold">32,890</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Contact Messages Section */}
      <div className="bg-background rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Recent Contact Messages</h2>
        <div className="space-y-4">
          {contactSubmissions.map((submission) => (
            <div key={submission.id} className="flex items-center justify-between p-4 bg-accent rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{submission.name}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    submission.status === "new" 
                      ? "bg-blue-100 text-blue-800"
                      : submission.status === "read"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {submission.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{submission.subject}</p>
                <p className="text-sm text-muted-foreground">{submission.email}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-muted-foreground block">{submission.date}</span>
                <button 
                  onClick={() => handleViewDetails(submission)}
                  className="text-sm text-primary hover:text-primary/80 mt-1"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">Message Details</h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-muted rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">From</h3>
                  <p className="text-muted-foreground">{selectedMessage.name} ({selectedMessage.email})</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Subject</h3>
                  <p className="text-muted-foreground">{selectedMessage.subject}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Date</h3>
                  <p className="text-muted-foreground">{selectedMessage.date}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Message</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>

                {selectedMessage.status !== "replied" && (
                  <div>
                    <h3 className="font-medium mb-1">Reply</h3>
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      rows={4}
                      placeholder="Type your reply here..."
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 mt-6">
                {selectedMessage.status !== "replied" ? (
                  <>
                    <button
                      onClick={handleMarkAsReplied}
                      className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
                    >
                      <Check className="w-4 h-4" />
                      Mark as Replied
                    </button>
                    <button
                      onClick={handleSendReply}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                    >
                      <Send className="w-4 h-4" />
                      Send Reply
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
