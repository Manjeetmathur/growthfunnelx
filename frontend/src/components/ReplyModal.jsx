import React, { useState } from 'react';
import axios from 'axios';
import { url } from './Backendurl/url';
import { useToast } from '@/components/ui/use-toast';

const ReplyModal = ({ toEmail, onClose }) => {
       const [subject, setSubject] = useState('');
       const [message, setMessage] = useState('');
       const [sending, setSending] = useState(false);
       const { toast } = useToast();

       const handleReply = async () => {
              if (!subject || !message) return;

              setSending(true);
              try {
                     const res = await axios.post(`${url}/reply`, {
                            to: toEmail,
                            subject,
                            message,
                     });

                     if (res.data.success) {
                            toast({
                                   title: "Message sent!",
                                   description: "Reply sent successfully ",
                            });
                            onClose();
                     } else {
                            alert('Failed to send reply');
                     }
              } catch (err) {
                     console.error(err);
                     alert('Server error');
              } finally {
                     setSending(false);
              }
       };

       return (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                            <button
                                   onClick={onClose}
                                   className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
                            >
                                   ×
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Reply to {toEmail}</h2>

                            <div className="space-y-4">
                                   <div>
                                          <label className="block mb-1 text-sm font-medium">Subject</label>
                                          <input
                                                 type="text"
                                                 className="w-full border px-3 py-2 rounded"
                                                 value={subject}
                                                 onChange={(e) => setSubject(e.target.value)}
                                                 placeholder="Subject"
                                          />
                                   </div>
                                   <div>
                                          <label className="block mb-1 text-sm font-medium">Message</label>
                                          <textarea
                                                 className="w-full border px-3 py-2 rounded"
                                                 rows="5"
                                                 value={message}
                                                 onChange={(e) => setMessage(e.target.value)}
                                                 placeholder="Type your reply here..."
                                          ></textarea>
                                   </div>
                            </div>

                            <div className="mt-4 text-right">
                                   <button
                                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                          onClick={handleReply}
                                          disabled={sending}
                                   >
                                          {sending ? 'Sending...' : 'Send Reply'}
                                   </button>
                            </div>
                     </div>
              </div>
       );
};

export default ReplyModal;
