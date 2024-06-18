import { apiClient } from "@/lib/api/apiClient";
import { useCallback, useState } from "react";
import { Comment } from "../types";

type SingleRecipeFetchAndSaveProps = {
  id: string;
};

const useSingleRecipeCommentsFetchAndSave = ({
  id,
}: SingleRecipeFetchAndSaveProps) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchDataComments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiClient.getRecipeComments(id as string);
      setComments(response.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, [id]);

  const handleSaveComment = useCallback(
    async (formData: { comment: string; rating: number }) => {
      const { comment, rating } = formData;
      const postCommentOk = await apiClient.postRecipeComment({
        id: id as string,
        comment,
        rating,
      });

      if (postCommentOk) {
        fetchDataComments();
      }
    },
    [fetchDataComments, id]
  );

  return {
    loading,
    comments,
    fetchDataComments,
    handleSaveComment,
  };
};

export default useSingleRecipeCommentsFetchAndSave;
